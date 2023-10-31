import { HttpClient } from "@angular/common/http";
import { Injectable} from '@angular/core'
import { DailyForecastsService } from "src/app/daily-forecasts/daily-forecasts-list-view/daily-forecasts-list-view.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { map, exhaustMap, catchError, of} from 'rxjs'

import * as storeActions from './actions'
import { Action } from "@ngrx/store";


@Injectable()
export class DailyForecastEffects {

  constructor ( private actions: Actions, private services: DailyForecastsService) {}


  fetchTodays = createEffect(() => {
    return this.actions.pipe(
      ofType(storeActions.fetchForecast.trigger),
      exhaustMap(() => {
        return this.services.fetchTodays().pipe(
          map(data => {
            return storeActions.fetchForecast.fulfilled({ data})
          }),
          catchError((error) => {
            return of(storeActions.fetchForecast.failed({ except: 'bad'}))
          })
        )
      },)
    )
  })
}
