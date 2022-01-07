import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { UsersService } from '@t4d-wnow-fullstack-angular11/user-lib';
import { CurrentUser } from '@t4d-wnow-fullstack-angular11/user-lib';
import { LoginForm } from '@t4d-wnow-fullstack-angular11/user-lib';
import { Observable } from 'rxjs';

import { AppState } from '../../app.state';
import { clearErrorMessage  } from '@t4d-wnow-fullstack-angular11/shared-lib';
import { selectErrorMessage } from '@t4d-wnow-fullstack-angular11/shared-lib';
import { loginUser } from '@t4d-wnow-fullstack-angular11/user-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public errorMessage$: Observable<string> = this.store.pipe(select(selectErrorMessage));

  get currentUser(): CurrentUser | null {
    return this.usersSvc.getCurrentUser();
  }

  constructor(
    private usersSvc: UsersService,
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
  }

  doLogin(loginForm: LoginForm): void {

    this.store.dispatch(loginUser({
      username: loginForm.username,
      password: loginForm.password,
    }));

  }

  doClear(): void {
    console.log('clicked clear');
    // this.errorMessage = '';
    this.store.dispatch(clearErrorMessage());
  }

}
