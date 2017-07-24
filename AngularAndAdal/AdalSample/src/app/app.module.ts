import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { Adal4Service, Adal4HTTPService } from 'adal-angular4';

import { AppRoutes } from './app.routing';
import { AuthenticationGuard } from './common/guards/authentication-guard';
import * as c from './';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
    AppRoutes
  ],
  declarations: [
    c.AppComponent,
    c.MainComponent,
    c.HomeComponent,
    c.LoginComponent,
    c.LogoutComponent
  ],
  providers: [
    Adal4Service,
    {
        provide: Adal4HTTPService,
        useFactory: Adal4HTTPService.factory,
        deps: [Http, Adal4Service]
    },
    AuthenticationGuard
  ],
  bootstrap: [c.AppComponent]
})
export class AppModule { }
