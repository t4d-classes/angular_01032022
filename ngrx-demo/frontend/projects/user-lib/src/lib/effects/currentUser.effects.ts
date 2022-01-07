import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { exhaustMap, catchError, mergeMap } from 'rxjs/operators';

import { UsersService } from '../services/users.service';
import { setErrorMessage, clearErrorMessage } from '@t4d-wnow-fullstack-angular11/shared-lib';
import { setCurrentUser } from '../actions/current-user.actions';
import { ICurrentUser } from '../models/CurrentUser';

@Injectable()
export class CurrentUserEffects {

  loginUser$ = createEffect(() => this.actions$.pipe(
    ofType('[User] Login User'),
    exhaustMap(
      (action: { username: string, password: string }) =>
        this.usersSvc.loginEmployee(action.username, action.password).pipe(
          mergeMap(() => of(
            setCurrentUser({
              currentUser: this.usersSvc.getCurrentUser() as ICurrentUser
            }),
            clearErrorMessage(),
          )),
          catchError((err: any) => {
            if (err.status === 404) {
              return of(setErrorMessage({ errorMessage: 'Username and password not found.' }));
            } else {
              return of(setErrorMessage({ errorMessage: 'Unknown login error.' }));
            }
          }),
        ),
    ),
  ));

  constructor(
    private actions$: Actions,
    private usersSvc: UsersService,
  ) { }
}
