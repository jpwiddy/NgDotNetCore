import { Component, Input, Injector, OnInit } from '@angular/core';

import * as Moment from 'moment';

@Component({
    selector: 'two',
    templateUrl: './two.component.html',
    styles: []
})
export class TwoComponent implements OnInit {
    works: string;
    formModel: any;
    user: any = {};

    componentContext: any;

    constructor(private injector: Injector) {
        console.log('two const');
        this.works = 'works';
        this.formModel = Moment();

        /***
         *  Using service locator pattern - https://angular.io/docs/ts/latest/guide/dependency-injection.html#!#explicit-injector
         *      -> injector.get('<provider name>', <default value>)
         */
        this.componentContext = this.injector.get('context', false);
    }

    onSubmit(event) {
        console.log(this, event);
    }

    ngOnInit() {
        console.log('two init');
    }

}
