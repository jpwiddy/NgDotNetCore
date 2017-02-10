import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PageContext } from '../models/page-context.model';

@Component({
    selector: 'breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
    @Input() rootPage: PageContext;
    @Input() crumbs: Array<PageContext>;
    @Output() selectCrumbOfPage = new EventEmitter();

    constructor() { }

    ngOnInit() {
        // this.crumbs will be initialized
    }

    selectCrumb(index: number) {
        if (index != this.crumbs.length - 1) {
            this.selectCrumbOfPage.emit(index);
        }
    }

}
