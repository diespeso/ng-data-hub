import { createAction, props } from "@ngrx/store";
import { IDailyForecast } from "src/app/models/daily-forecast.model";

export const fetchDailyForecastsList = createAction('[DailyForecastsList] Fetch', props<{ data: IDailyForecast[] }>())
export const fetchDailyForecastsListDone = createAction('[DailyForecastsList] Fetch Done')


export const fetchForecasts = {
  trigger: createAction('[DailyForecastsList] Trigger', props<{ params: {}}>()),
  pending: createAction('[DailyForecastsList] Pending'),
  fulfilled: createAction('[DailyForecastsList] Fulfilled', props<{ data: IDailyForecast[]}>()),
}