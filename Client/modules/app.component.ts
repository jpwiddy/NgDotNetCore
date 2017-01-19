import { Title } from '@angular/platform-browser';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DataService } from './shared/services/data.service';

/*
 * App Component - Top Level Component
 */
@Component({
    selector: 'app-component',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        './app.component.scss',
        '../stylesheets/app.global.scss'
    ],
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

    constructor(private titleService: Title) { }

    ngOnInit() {
        this.setTitle('Site title');
    }

    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }
}
