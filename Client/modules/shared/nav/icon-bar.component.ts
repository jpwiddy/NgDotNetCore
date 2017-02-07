import { Component } from '@angular/core';

@Component({
    selector: 'icon-bar',
    styleUrls: ['./icon-bar.component.scss'],
    templateUrl: './icon-bar.component.html'
})
export class IconBarComponent {
    // FIXME: Get real data in here
    sideBarPages = [
        { title: 'Airplane', icon: 'fa fa-paper-plane', routeType: 'one', component: 'OneComponent', extern: 'January 1, 2014' },
        { title: 'Ca$h', icon: 'fa fa-dollar', routeType: 'two', component: 'TwoComponent', extern: 'Sure does!' },
        { title: 'Checklist', icon: 'fa fa-check-square', routeType: 'three', component: 'ThreeComponent', extern: 'works like a charm' },
        { title: 'Tags', icon: 'fa fa-tags', routeType: 'tags', component: '' },
        { title: 'Settings', icon: 'fa fa-cog', routeType: 'settings', component: '' },
        { title: 'Database', icon: 'fa fa-database', routeType: 'database', component: '' },
        { title: 'FAQ', icon: 'fa fa-question-circle', routeType: 'faq', component: '' },
        { title: 'Filter', icon: 'fa fa-filter', routeType: 'filter', component: '' },
        { title: 'Heart', icon: 'fa fa-heart', routeType: 'heart', component: '' },
        { title: 'Calculator', icon: 'fa fa-calculator', routeType: 'calculator', component: '' },
        { title: 'Ideas', icon: 'fa fa-lightbulb-o', routeType: 'ideas', component: '' },
        { title: 'Docs', icon: 'fa fa-folder-o', routeType: 'docs', component: '' },
        { title: 'Scheduler', icon: 'fa fa-calendar', routeType: 'scheduler', component: '' },
        { title: 'Security', icon: 'fa fa-key', routeType: 'security', component: '' },
        { title: 'UI', icon: 'fa fa-object-ungroup', routeType: 'ui', component: '' },
        { title: 'Privacy', icon: 'fa fa-eye', routeType: 'privacy', component: '' },
        { title: 'Stats', icon: 'fa fa-area-chart', routeType: 'stats', component: '' }
    ];

    constructor() { }

    selectPage(pageData: any, idx: number) { }
}
