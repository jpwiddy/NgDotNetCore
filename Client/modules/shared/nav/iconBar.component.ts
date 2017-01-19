import { Component } from '@angular/core';

@Component({
    selector: 'icon-bar',
    styleUrls: ['./iconBar.component.scss'],
    templateUrl: './iconBar.component.html'
})
export class IconBarComponent {
    sideBar = [
        { label: 'Airplane', icon: 'fa fa-paper-plane', routerRoute: 'one' },
        { label: 'Checklist', icon: 'fa fa-check-square', routerRoute: '' },
        { label: 'Tags', icon: 'fa fa-tags', routerRoute: '' },
        { label: 'Settings', icon: 'fa fa-cog', routerRoute: '' },
        { label: 'Database', icon: 'fa fa-database', routerRoute: '' },
        { label: 'FAQ', icon: 'fa fa-question-circle', routerRoute: '' },
        { label: 'Filter', icon: 'fa fa-filter', routerRoute: '' },
        { label: 'Heart', icon: 'fa fa-heart', routerRoute: '' },
        { label: 'Calculator', icon: 'fa fa-calculator', routerRoute: '' },
        { label: 'Ideas', icon: 'fa fa-lightbulb-o', routerRoute: '' },
        { label: 'Docs', icon: 'fa fa-folder-o', routerRoute: '' },
        { label: 'Scheduler', icon: 'fa fa-calendar', routerRoute: '' },
        { label: 'Security', icon: 'fa fa-key', routerRoute: '' },
        { label: 'UI', icon: 'fa fa-object-ungroup', routerRoute: '' },
        { label: 'Privacy', icon: 'fa fa-eye', routerRoute: '' },
        { label: 'Stats', icon: 'fa fa-area-chart', routerRoute: '' },
        { label: 'Ca$h', icon: 'fa fa-dollar', routerRoute: '' }
    ];

    constructor() { }
}
