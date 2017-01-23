import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    // Lazy async modules, since they're all child modules
    { path: '', loadChildren: './home/home.module#HomeModule' },
    { path: 'page', loadChildren: './page-manager/page-manager.module#PageManagerModule' },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'register', loadChildren: './register/register.module#RegisterModule' },
    // Catch all
    { path: '**', redirectTo: '' },
];

export const routing = RouterModule.forRoot(routes);
