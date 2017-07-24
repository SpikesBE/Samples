import { ModuleWithProviders } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import * as c from './';

const routes: Route[] = [
    { path: '404', component: c.NotFoundComponent }
];

export const ErrorPagesRoutes: ModuleWithProviders = RouterModule.forChild(routes);
