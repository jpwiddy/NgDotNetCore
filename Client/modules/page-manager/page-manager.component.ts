import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PageContext } from '../shared/models/page-context.model';
import { AppService } from '../app.service';

@Component({
    selector: 'page-manager',
    templateUrl: './page-manager.component.html',
    styleUrls: ['./page-manager.component.scss']
})
export class PageManagerComponent implements OnInit, OnDestroy {
    private activePageSubscriber: any;
    private paramsSub: any;
    activePage: PageContext;
    pages: Array<PageContext>;
    pageManager: any;

    constructor(private appService: AppService, private route: Router) {
        this.pageManager = appService.pageManager;

        // Used for breadcrumbs
        this.activePageSubscriber = this.pageManager.activePage.subscribe((newPage) => {
            this.activePage = newPage;
        });

        // Look at route params, build out nav tree if it's not already made (if there are no pages stored)
        if (!this.pageManager.pages.length) {
            // FIXME: Return a promise so that this can wait to do the following check
            this.setupPages(route.routerState.snapshot);
            // Check if after setting up pages if there's no active page - if so, route to root
            if (!this.activePage) {
                route.navigate(['page']);
            }
        }
    }

    // Life Cycle

    ngOnInit() {
        console.log('Page Manager Component Initialized');
    }

    ngOnDestroy() {
        this.activePageSubscriber.unsubscribe();
    }

    setupPages(routerSnapshot: any) {
        this.pageManager.backfillPageTree(routerSnapshot);
    }

    // Component Action

    selectPage(index: number) {
        this.pageManager.selectPageAtIndex(index);
    }

    selectCrumbOfPage(crumbIndex: number) {
        this.pageManager.selectCrumbOfPage(crumbIndex);
    }

    closePage(index: number) {
        this.pageManager.closePage(index);
    }

}
