import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { UsersService, logoutUser } from '@t4d-wnow-fullstack-angular11/user-lib';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private usersSvc:  UsersService,
    private router: Router,
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.usersSvc.logoutUser();
    this.store.dispatch(logoutUser());
    this.router.navigateByUrl('/');
  }

}
