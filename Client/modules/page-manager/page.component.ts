import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { AppService } from '../app.service';
import { PageContext } from '../shared/models/page-context.model';

@Component({
    selector: 'page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit, OnDestroy {
    private activePageSubscriber: any;
    pageManager: any;
    componentData: any;

    constructor(private appService: AppService) {
        this.pageManager = appService.pageManager;
    }

    triggerPageUpdate(pageContext: PageContext) {
        // PageContext is set, set Dynamic Component data & pass in PageContext
        if (pageContext) {
            let data = this.pageManager.generatePageData(pageContext);
            this.componentData = data;
        }
    }

    ngOnInit() {
        this.activePageSubscriber = this.pageManager.activePage.subscribe((newPage) => {
            if (newPage) {
                if (newPage.children.length) {
                    newPage = newPage.children[newPage.children.length - 1];
                }
                this.triggerPageUpdate(newPage);
            }
        });
    }
    ngOnDestroy() {
        this.activePageSubscriber.unsubscribe();
    }

}
