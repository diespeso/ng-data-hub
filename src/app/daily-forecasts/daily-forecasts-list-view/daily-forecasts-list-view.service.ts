import { HttpClient} from '@angular/common/http'

import { Injectable } from "@angular/core";
import { Action } from '@ngrx/store';
import { Observable, catchError, map, scan, tap, throwError } from 'rxjs';
import { IDailyForecast } from 'src/app/models/daily-forecast.model';
import { fetchDailyForecastsList } from 'src/app/store/daily-forecasts-list/actions';

@Injectable({
  providedIn: 'root'
})
export class DailyForecastsService {
  constructor(private http: HttpClient) {}

  fetchAll(): Observable<IDailyForecast[]> {
    return this.http.get<{ status: boolean, data: IDailyForecast[]}>('https://hello-dd2xdoaowa-uc.a.run.app/daily-forecasts')
    .pipe(map((response: {data: IDailyForecast[]}) => response.data))
  }

  fetchTodays(): Observable<IDailyForecast> {
    return this.http.get<{status: boolean, data: IDailyForecast, message: String}>('https://hello-dd2xdoaowa-uc.a.run.app/daily-forecasts')
    .pipe(tap((response: { data: IDailyForecast}) => {
      console.log('this is the response: ', response)
    },),
    map((response: {data: IDailyForecast}) => response.data),
    catchError((response) => {
      console.log('enters bad')
      return throwError(() => new Error("something bad: ", response))
    }))

  }
}
