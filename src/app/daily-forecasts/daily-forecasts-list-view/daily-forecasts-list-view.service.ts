import { HttpClient} from '@angular/common/http'

import { Injectable } from "@angular/core";
import { Action } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { IDailyForecast } from 'src/app/models/daily-forecast.model';
import { fetchDailyForecastsList } from 'src/app/store/daily-forecasts-list/actions';

@Injectable({
  providedIn: 'root'
})
export class DailyForecastsService {
  constructor(private http: HttpClient) {}

  fetchAll(): Observable<IDailyForecast[]> {
    return this.http.get<{ status: boolean, data: IDailyForecast[]}>('https://hello-dd2xdoaowa-uc.a.run.app/daily-forecast')
    .pipe(map((response: {data: IDailyForecast[]}) => response.data))
  }
}