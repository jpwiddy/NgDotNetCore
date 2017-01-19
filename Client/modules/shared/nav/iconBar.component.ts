import { Component } from '@angular/core';

@Component({
    selector: 'icon-bar',
    styleUrls: ['./iconBar.component.scss'],
    templateUrl: './iconBar.component.html'
})
export class IconBarComponent {
    sideBar = [
        { label: 'Airplane', icon: 'fa fa-paper-plane' },
        { label: 'Checklist', icon: 'fa fa-check-square' },
        { label: 'Tags', icon: 'fa fa-tags' },
        { label: 'Settings', icon: 'fa fa-cog' },
        { label: 'Database', icon: 'fa fa-database' },
        { label: 'FAQ', icon: 'fa fa-question-circle' },
        { label: 'Filter', icon: 'fa fa-filter' },
        { label: 'Heart', icon: 'fa fa-heart' },
        { label: 'Calculator', icon: 'fa fa-calculator' },
        { label: 'Ideas', icon: 'fa fa-lightbulb-o' },
        { label: 'Docs', icon: 'fa fa-folder-o' },
        { label: 'Scheduler', icon: 'fa fa-calendar' },
        { label: 'Security', icon: 'fa fa-key' },
        { label: 'UI', icon: 'fa fa-object-ungroup' },
        { label: 'Privacy', icon: 'fa fa-eye' },
        { label: 'Stats', icon: 'fa fa-area-chart' },
        { label: 'Ca$h', icon: 'fa fa-dollar' }
    ];

    constructor() { }
}
