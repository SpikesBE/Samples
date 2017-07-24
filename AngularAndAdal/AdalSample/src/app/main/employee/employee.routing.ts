import { ModuleWithProviders } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';

const routes: Route[] = [
    { path: '', component: ListComponent }
];

export const EmployeeRoutes: ModuleWithProviders = RouterModule.forChild(routes);
