import { Injectable } from '@angular/core';

import { PageContext } from '../models/page-context.model';

@Injectable()
export class ContentService {
    pageList: any;

    constructor() {
        let page1 = { title: 'Airplane', icon: 'fa fa-paper-plane', routeType: 'one', component: 'OneComponent', extern: 'January 1, 2014' };
        let page2 = { title: 'Ca$h', icon: 'fa fa-dollar', routeType: 'two', component: 'TwoComponent', extern: 'Sure does!' };
        let page3 = { title: 'Checklist', icon: 'fa fa-check-square', routeType: 'three', component: 'ThreeComponent', extern: 'works like a charm' };

        this.pageList = {
            '1234': page1,
            '1212': page1,
            '2323': page1,
            '5678': page2,
            '9012': page3,
            '1001': page3,
            '1002': page3,
            '1003': page3
        };

    }
    /**
     * Returns a deep copy of the object
     */
    deepCopy(oldObj: any = {}): any {
        var newObj = oldObj;
        if (oldObj && typeof oldObj === "object") {
            newObj = Object.prototype.toString.call(oldObj) === "[object Array]" ? [] : {};
            for (var i in oldObj) {
                newObj[i] = this.deepCopy(oldObj[i]);
            }
        }
        return newObj;
    }

    getPage(id: string): PageContext {
        let data = this.deepCopy(this.pageList[id]);
        data.id = id;
        return new PageContext(data);
    }
}
