import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs';

import { setErrorMessage } from "shared";
import { refreshColorsRequest, refreshColorsDone } from "./color-tool.actions";
import { Color } from "./models/colors";

@Injectable({
  providedIn: 'any',
})
export class ColorToolEffects {

  constructor(
    private httpClient: HttpClient,
    private actions$: Actions,
  ) { }

  refreshColors$ = createEffect(() => this.actions$.pipe(
    ofType(refreshColorsRequest),
    switchMap(() => {
      return this.httpClient
        .get<Color[]>('http://localhost:3060/colors')
        .pipe(
          map(colors => refreshColorsDone({ colors })),
          catchError(err => of(setErrorMessage({ message: err.message })))
        )
    })
  ));

}