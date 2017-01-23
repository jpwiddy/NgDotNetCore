import { Component, OnDestroy } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import ComponentRegistry from '../dynamic-component/dynamic-component.registry';
import { PageContext } from '../models/page-context.model';
import { ContentService } from '../services/content.service';

@Injectable()
export class PageManager implements OnDestroy {
    routerWatcher: any;
    updatedUrl: any;
    registry: ComponentRegistry;
    pages: Array<PageContext> = [];
    activePage: BehaviorSubject<PageContext> = new BehaviorSubject(null);

    constructor(private router: Router, private activatedRoute: ActivatedRoute, private contentService: ContentService) {
        this.registry = new ComponentRegistry();
        this.activePage.next(null);

        this.routerWatcher = router.events.subscribe((val: any) => {
            this.updatedUrl = val.urlAfterRedirects;
        });
    }

    ngOnDestroy() {
        this.routerWatcher.destroy();
    }

    // FIXME: Pull in all recently open pages (probably from local store), not just the one in the URL
    backfillPageTree(routerSnapshot: RouterStateSnapshot) {
        let root = routerSnapshot.root,
            rootIndex = 0,
            rootPage: PageContext;

        while (root) {
            // FIXME: Fragile point: We want to skip the first two urls, since it's just the base url '/page'
            if (rootIndex > 1 && root.url && root.url.length) {
                const type = root.url[0] + '',
                    id = root.url[1];

                let routeComponent = this.registry.getByRouteType(type);

                if (routeComponent) {
                    let newPageContext: any = routeComponent;

                    let newPage;

                    // FIXME : Test
                    if (id) {
                        newPageContext['id'] = id + '';
                        newPage = this.contentService.getPage(newPageContext.id);
                    } else {
                        newPage = new PageContext(newPageContext);
                    }

                    if (!rootPage) {
                        rootPage = newPage;
                    } else {
                        rootPage.children.push(newPage)
                    }
                }
            }

            rootIndex += 1;
            root = root.children[0];
        }

        if (rootPage) {
            this.addPage(rootPage);
            this.selectPageAtIndex(0);
        }
    }

    // CLEANUP: Could probably get rid of this extra object and just use a PageContext for the Dynamic Component
    generatePageData(pageModel: any = { context: {} }): Object {
        let retObj = { inputs: {} };

        if (pageModel.context.component) {
            // Check if named
            if (typeof pageModel.context.component === 'string') {
                retObj['componentName'] = pageModel.context.component;
            } else {
                // Actual component given
                retObj['component'] = pageModel.context.component;
            }
            retObj['id'] = pageModel.context.id || '';
            retObj.inputs['context'] = pageModel.context;
        }

        return retObj;
    }

    addPage(newPage: PageContext): void {
        this.pages.push(newPage);
    }

    closePage(index: number): PageContext {
        this.activePage.next(null);

        // Select the Page to the right of the one that closed, if there is one there
        let nextPageIndex = (this.pages.length - 1 == index ? index - 1 : index);
        let closingPage = this.pages.splice(index, 1)[0];

        if (this.pages.length) {
            this.selectPageAtIndex(nextPageIndex);
        } else {
            // Last page was closed
            this.router.navigate([`/page`]);
        }

        return closingPage;
    }

    updatePage(updatedPageContext: PageContext): PageContext {
        let activePage = this.activePage.getValue();

        for (let idx = 0; idx < this.pages.length; ++idx) {

            let isActive = (activePage == this.pages[idx]);

            if ((updatedPageContext == this.pages[idx]) || isActive) {
                this.pages[idx].context = updatedPageContext.context;
                this.pages[idx].children = updatedPageContext.children;

                if (isActive) {
                    return this.selectPageAtIndex(idx);
                }
                break;
            }
        }

        return null;
    }

    private routeOnSelect(selectedPage: PageContext): void {
        let routeTo = `/page/${selectedPage.context.routeType}`;
        if (selectedPage.context.id) {
            routeTo += '/' + selectedPage.id;
        }

        selectedPage.fullRoute = routeTo;
        this.router.navigate([selectedPage.fullRoute]);
        this.activePage.next(selectedPage);
    }

    /**
     * Takes in an index, selects page in list of pages AND sets next active
     */
    selectPageAtIndex(index: number): PageContext {
        let selectedPage;

        if (this.pages.length && this.pages.length >= index) {
            selectedPage = this.pages[index];

            // reset all pages to not active, set selected as active
            this.pages.forEach(page => page.active = false);
            selectedPage.active = true;
            this.routeOnSelect(selectedPage);
        }

        return selectedPage;
    }

    /**
     * Takes in a PageContext, runs through following tree - 
     * 
     * If there's an active page AND the selected page has ID AND the selected page is same page type than active:
     *      If there's an ID on the active page:
     *          - A new page is added as a crumb of active
     *      If there's no ID on the active page:
     *          - Active page is updated with new ID/context
     * If there's no active page OR selected page is different page type than active:
     *      If there's an ID on the active page:
     *          - A new page is added as a crumb of active
     *      If there's no ID on the active page:
     *          - New page to list, made active
     */
    selectPage(selectedPage: PageContext): PageContext {
        let currentPage = this.activePage.getValue(),
            retPage;

        if (currentPage && selectedPage.id && currentPage.context.routeType == selectedPage.context.routeType) {
            if (currentPage.id) {
                retPage = this.addCrumb(selectedPage);
            } else {
                retPage = this.updatePage(selectedPage);
            }
        } else {
            if (selectedPage.id) {
                retPage = this.addCrumb(selectedPage);
            } else {
                // reset all pages to not active, set selected as active
                this.pages.forEach(page => page.active = false);
                selectedPage.active = true;

                this.addPage(selectedPage);
                retPage = this.pages[this.pages.length - 1];

                this.routeOnSelect(retPage);
            }
        }

        return selectedPage;
    }

    addCrumb(crumbPage: PageContext): PageContext {
        let currentPage: PageContext = this.activePage.getValue(),
            routeToUrl = `${this.updatedUrl}/${crumbPage.context.routeType}/${crumbPage.context.id}`;

        crumbPage.fullRoute = routeToUrl;
        crumbPage.isChild = true;
        currentPage.children.push(crumbPage);

        this.router.navigate([routeToUrl]);

        return crumbPage;
    }

    selectCrumbOfPage(crumbIndex: number): PageContext {
        let nextPage;
        let currentPage: PageContext = this.activePage.getValue();

        // check for selection of root page
        if (crumbIndex === -1) {
            currentPage.children = [];
            nextPage = this.routeOnSelect(currentPage);

        } else if (currentPage.children && currentPage.children.length > crumbIndex) {
            currentPage.children.length = crumbIndex + 1;
            nextPage = currentPage.children[currentPage.children.length - 1];

            let routeTo = nextPage.fullRoute;

            this.router.navigate([routeTo]);
        }

        return nextPage;

    }
}
