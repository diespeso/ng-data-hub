import { createAction, props } from "@ngrx/store";
import { IDailyForecast } from "src/app/models/daily-forecast.model";

export const fetchDailyForecastsList = createAction('[DailyForecastsList] Fetch', props<{ data: IDailyForecast[] }>())