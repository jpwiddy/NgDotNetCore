import { Routes, RouterModule } from '@angular/router';

import { PageManagerComponent } from './page-manager.component';

const routes: Routes = [
    { path: '', component: PageManagerComponent, loadChildren: './page.module#PageModule' }
];

export const routing = RouterModule.forChild(routes);
