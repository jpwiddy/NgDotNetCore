import { Component, Input, Injector, OnInit } from '@angular/core';

@Component({
  selector: 'two',
  templateUrl: './two.component.html',
  styles: []
})
export class TwoComponent implements OnInit {
    works: string;
    componentContext: any;

    constructor(private injector: Injector) { 
        this.works = 'works';

        /***
         *  Using service locator pattern - https://angular.io/docs/ts/latest/guide/dependency-injection.html#!#explicit-injector
         *      -> injector.get('<provider name>', <default value>)
         */
        this.componentContext = this.injector.get('context', false);
    }

    ngOnInit() {
        console.log('two init');
    }

}
