import { createReducer, on } from "@ngrx/store";
import { IDailyForecast } from "src/app/models/daily-forecast.model";
import { fetchDailyForecastsList, fetchForecasts } from "./actions";

export interface DailyForecastsListState {
  data: IDailyForecast[],
  loading: boolean,
}

export const initialState: DailyForecastsListState = {
  data: [],
  loading: false
}

export const dailyForecastsListReducer = createReducer(initialState,
  on(fetchForecasts.fulfilled, (state, action) => {
  return {
    ...state,
    data: action.data,
    loading: false
  }
}),
  on(fetchForecasts.trigger, (state, action) => {
    return {
      ...state,
      loading: true
    }
  })
)