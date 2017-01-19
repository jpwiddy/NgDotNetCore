import { Component } from '@angular/core';

@Component({
    selector: 'icon-bar',
    styleUrls: ['./iconBar.component.scss'],
    templateUrl: './iconBar.component.html'
})
export class IconBarComponent {
    sideBar = [
        { label: 'Airplane', icon: 'ion-paper-airplane' },
        { label: 'Checklist', icon: 'ion-checkmark-circled' },
        { label: 'Stats', icon: 'ion-stats-bars' },
        { label: 'Settings', icon: 'ion-settings' },
        { label: 'Funnel', icon: 'ion-funnel' },
        { label: 'Hammer', icon: 'ion-hammer' },
        { label: 'Heart', icon: 'ion-heart' },
        { label: 'Calculator', icon: 'ion-calculator' },
        { label: 'Merge', icon: 'ion-merge' },
        { label: 'Scheduler', icon: 'ion-calendar' },
        { label: 'Security', icon: 'ion-key' },
        { label: 'CSR', icon: 'ion-happy' },
        { label: 'Privacy', icon: 'ion-eye' },
        { label: 'Announcements', icon: 'ion-speakerphone' },
        { label: 'Ca$h', icon: 'ion-cash' },
        { label: 'Awards', icon: 'ion-ribbon-b' }
    ];

    constructor() { }
}
