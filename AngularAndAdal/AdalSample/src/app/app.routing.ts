import { ModuleWithProviders } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AuthenticationGuard } from './common/guards/authentication-guard';
import { MainComponent, HomeComponent, LoginComponent, LogoutComponent } from './';

const routes: Route[] = [
    { path: 'error', loadChildren: 'app/error-pages/error-pages.module#ErrorPagesModule'},
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: '', component: MainComponent, canActivate: [AuthenticationGuard], canActivateChild: [AuthenticationGuard], children: [
      { path: '', component: HomeComponent },
      { path: 'employee', loadChildren: 'app/main/employee/employee.module#EmployeeModule'},
    ]},
    { path: '**', pathMatch: 'full', redirectTo: 'error/404' }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
