import { Component } from '@angular/core';

@Component({
    selector: 'icon-bar',
    styleUrls: ['./iconBar.component.scss'],
    templateUrl: './iconBar.component.html'
})
export class IconBarComponent {
    sideBar = [
        { label: 'Airplane', icon: 'fa fa-paper-plane', routerRoute: 'one' },
        { label: 'Checklist', icon: 'fa fa-check-square', routerRoute: 'bunk' },
        { label: 'Tags', icon: 'fa fa-tags', routerRoute: 'bunk' },
        { label: 'Settings', icon: 'fa fa-cog', routerRoute: 'bunk' },
        { label: 'Database', icon: 'fa fa-database', routerRoute: 'bunk' },
        { label: 'FAQ', icon: 'fa fa-question-circle', routerRoute: 'bunk' },
        { label: 'Filter', icon: 'fa fa-filter', routerRoute: 'bunk' },
        { label: 'Heart', icon: 'fa fa-heart', routerRoute: 'bunk' },
        { label: 'Calculator', icon: 'fa fa-calculator', routerRoute: 'bunk' },
        { label: 'Ideas', icon: 'fa fa-lightbulb-o', routerRoute: 'bunk' },
        { label: 'Docs', icon: 'fa fa-folder-o', routerRoute: 'bunk' },
        { label: 'Scheduler', icon: 'fa fa-calendar', routerRoute: 'bunk' },
        { label: 'Security', icon: 'fa fa-key', routerRoute: 'bunk' },
        { label: 'UI', icon: 'fa fa-object-ungroup', routerRoute: 'bunk' },
        { label: 'Privacy', icon: 'fa fa-eye', routerRoute: 'bunk' },
        { label: 'Stats', icon: 'fa fa-area-chart', routerRoute: 'bunk' },
        { label: 'Ca$h', icon: 'fa fa-dollar', routerRoute: 'bunk' }
    ];

    constructor() { }
}
