import { Component } from '@angular/core';
import { DailyForecastsService } from './daily-forecasts-list-view.service';
import { Store, createFeatureSelector, createSelector, select } from '@ngrx/store';
import { fetchDailyForecastsList, fetchForecasts } from 'src/app/store/daily-forecasts-list/actions';
import { DailyForecastsEffects } from 'src/app/store/daily-forecasts-list/effects';
import { AppState } from 'src/app/store';
import { DailyForecastsListState } from 'src/app/store/daily-forecasts-list/reducer';
import { IDailyForecast } from 'src/app/models/daily-forecast.model';


const selectForecasts = createFeatureSelector<DailyForecastsListState>('forecasts')
const selectTwo = createSelector(selectForecasts, (state) => state.data)

@Component({
  selector: 'app-daily-forecasts-list-view',
  templateUrl: './daily-forecasts-list-view.component.html',
  styleUrls: ['./daily-forecasts-list-view.component.css']
})
export class DailyForecastsListViewComponent {

  forecasts: IDailyForecast[] = [];

  constructor(private dailyForecastsService: DailyForecastsService, private store: Store<AppState>, private effects: DailyForecastsEffects) {
    //console.log('testing ;)')

    store.dispatch(fetchForecasts.trigger({ params: {}})) // provoca recarga eterna

    /*
    console.log(selectTwo)
    console.log(selectForecasts)

    console.log(this.store.pipe(select(selectTwo)))

    console.log('test this: ', this.store)*/

    this.store.select((state: AppState) => state.dailyForecastsList.data).subscribe(val => {
      this.forecasts = val

    })

    console.log(this.forecasts)

  }
}
