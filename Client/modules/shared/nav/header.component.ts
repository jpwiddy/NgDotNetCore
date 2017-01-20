import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-header',
    styleUrls: ['./header.component.scss'],
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    isCollapsed: boolean = true;
    sideNavOpen: boolean = false;
    openClass: string = 'st-menu-open';

    constructor(private router: Router, private authService: AuthService) { }

    toggleNav() {
        this.isCollapsed = !this.isCollapsed;
    }
}
