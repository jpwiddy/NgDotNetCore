import { Component, Input, Injector, OnInit } from '@angular/core';

import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'two',
    templateUrl: './two.component.html',
    styles: []
})
export class TwoComponent implements OnInit {
    works: string;
    componentContext: any;
    time: NgbTimeStruct = { hour: 13, minute: 30, second: 30 };
    user: any = {};

    constructor(private injector: Injector) {
        this.works = 'works';

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
