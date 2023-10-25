import { createReducer, on } from "@ngrx/store";
import { IDailyForecast } from "src/app/models/daily-forecast.model";
import { fetchDailyForecastsList } from "./actions";

export interface DailyForecastsListState {
  data: IDailyForecast[],
  loading: false
}

export const initialState: DailyForecastsListState = {
  data: [],
  loading: false
}

export const dailyForecastsListReducer = createReducer(initialState, on(fetchDailyForecastsList, (state, action) => {
  state.data = action.data
  return state
}))