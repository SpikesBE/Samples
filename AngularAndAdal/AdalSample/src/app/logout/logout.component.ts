import { Component, OnInit } from '@angular/core';
import { Adal4Service } from 'adal-angular4';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  isAuthenticated = true;

  constructor(
    private adalSvc: Adal4Service
  ) {
    this.isAuthenticated = this.adalSvc.userInfo.authenticated;
  }

  ngOnInit() {
    if (this.isAuthenticated) {
      this.adalSvc.logOut();
    }
  }
}
