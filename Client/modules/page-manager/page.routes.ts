import { Routes, RouterModule } from '@angular/router';

import { PageComponent } from './page.component';

const routes: Routes = [
    { path: '', component: PageComponent },
    { path: ':type', component: PageComponent },
    { path: ':type/:id', component: PageComponent },
    { path: ':type/:id', loadChildren: './page.module#PageModule' }
];

export const routing = RouterModule.forChild(routes);
