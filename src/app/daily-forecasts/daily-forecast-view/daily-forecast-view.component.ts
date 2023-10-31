import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IDailyForecast } from 'src/app/models/daily-forecast.model';
import { AppState } from 'src/app/store';
import { fetchForecast } from 'src/app/store/daily-forecast/actions';

@Component({
  selector: 'app-daily-forecast-view',
  templateUrl: './daily-forecast-view.component.html',
  styleUrls: ['./daily-forecast-view.component.css']
})
export class DailyForecastViewComponent {

  forecast: IDailyForecast;
  nomber: number = 32;

  constructor (private store: Store<AppState>) {

    console.log('here ok :)')
    store.dispatch(fetchForecast.trigger())

    this.store.select((state: AppState) => state.dailyForecast.data).subscribe(val => {
      this.forecast = val!
    })
  }

}
