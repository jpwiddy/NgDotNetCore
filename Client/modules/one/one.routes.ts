import { Routes, RouterModule } from '@angular/router';

import { OneComponent } from './one.component';

const routes: Routes = [
    { path: '', component: OneComponent }
];

export const routing = RouterModule.forChild(routes);
