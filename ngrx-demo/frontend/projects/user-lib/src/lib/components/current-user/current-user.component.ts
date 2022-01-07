import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { UsersService } from '../../services/users.service';
import {
  selectCurrentUserLoggedIn,
  selectCurrentUserDisplayName,
  selectCurrentUserUsername,
} from '../../selectors/currentUser.selector';
import { UserLibState } from "../../user-lib.state";


@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.css']
})
export class CurrentUserComponent implements OnInit {

  // get loggedIn(): boolean {
  //   return !!this.usersSvc.getCurrentUser();
  // }

  loggedIn$ = this.store.pipe(select(selectCurrentUserLoggedIn));

  // get displayName(): string {
  //   return this.usersSvc.getCurrentUser()?.displayName ?? '';
  // }

  displayName$ = this.store.pipe(select(selectCurrentUserDisplayName));

  // get username(): string {
  //   return this.usersSvc.getCurrentUser()?.username ?? '';
  // }

  username$ = this.store.pipe(select(selectCurrentUserUsername));

  constructor(
    private router: Router,
    private store: Store<{ user: UserLibState }>,
    private usersSvc: UsersService,
  ) { }

  ngOnInit(): void {
  }

  public navigateToProfile(): Promise<boolean> {
    return this.router.navigateByUrl('/profile');
  }

  public navigateToLogout(): Promise<boolean> {
    return this.router.navigateByUrl('/logout');
  }

  public navigateToLogin(): Promise<boolean> {
    return this.router.navigateByUrl('/login');
  }

}
