import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';


import { AppState } from '../../app.state';
import { selectCurrentUserProfile } from '@t4d-wnow-fullstack-angular11/user-lib';


import { UsersService } from '@t4d-wnow-fullstack-angular11/user-lib';
import { ChangePasswordForm } from '@t4d-wnow-fullstack-angular11/user-lib';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser$ = this.store.pipe(select(selectCurrentUserProfile));

  constructor(
    public usersSvc: UsersService,
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
  }

  public doChangePassword(changePasswordForm: ChangePasswordForm) {
    const { username, userKind } = this.usersSvc.getCurrentUser()!;

    this.usersSvc.changePassword(
      username, userKind,
      changePasswordForm.currentPassword,
      changePasswordForm.newPassword).subscribe();
  }

}
