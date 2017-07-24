import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorPagesRoutes } from './error-pages.routing';
import { NotFoundComponent } from './';

@NgModule({
  imports: [
    CommonModule,
    ErrorPagesRoutes
  ],
  declarations: [NotFoundComponent]
})
export class ErrorPagesModule { }
