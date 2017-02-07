import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    // Lazy async modules, since they're all child modules
    { path: '', loadChildren: './home/home.module#HomeModule' },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
    // Catch all
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);
