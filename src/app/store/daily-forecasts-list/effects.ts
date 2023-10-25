import { HttpClient } from '@angular/common/http'
import {Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { DailyForecastsService } from 'src/app/daily-forecasts/daily-forecasts-list-view/daily-forecasts-list-view.service'

import {map, switchMap, exhaustMap, pluck} from 'rxjs'

import * as storeActions from './actions'

@Injectable()
export class DailyForecastsEffects {

  constructor(private actions: Actions ,private services: DailyForecastsService) {}

  /*fetchAll = createEffect(() => { // trigger
      return this.actions.pipe(
        ofType(storeActions.fetchDailyForecastsList),
        switchMap(() => {
         return this.services.fetchAll().pipe(map(data =>  storeActions.fetchDailyForecastsList({data})))
        })
      )
  })*/

  fetchAll = createEffect(() => {
    return this.actions.pipe(
      ofType(storeActions.fetchForecasts.trigger),
      exhaustMap(() => {
        return this.services.fetchAll().pipe(map(data => storeActions.fetchForecasts.fulfilled({data})))
      }),

    )
  })
}