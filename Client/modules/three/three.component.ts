import { Component, Input, Injector, OnInit } from '@angular/core';

import { AppService } from '../app.service';
import { PageContext } from '../shared/models/page-context.model';
import { ContentService } from '../shared/services/content.service';

@Component({
  selector: 'three',
  templateUrl: './three.component.html',
  styles: []
})
export class ThreeComponent implements OnInit {
    componentContext: any;
    pageManager: any;

    constructor(private injector: Injector, private contentService: ContentService, private app: AppService) { 
        /***
         *  Using service locator pattern - https://angular.io/docs/ts/latest/guide/dependency-injection.html#!#explicit-injector
         *      -> injector.get('<provider name>', <default value>)
         */
        this.pageManager = app.pageManager;
        this.componentContext = this.injector.get('context', {});
    }

    selectPage(id: string) {
        let newPage: PageContext = this.contentService.getPage(id);
        this.pageManager.selectPage(newPage);
    }

    ngOnInit() {
        console.log('three init');
    }

}
