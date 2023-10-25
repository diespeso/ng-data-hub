import { DailyForecastsListState, dailyForecastsListReducer } from "./daily-forecasts-list/reducer";


export const reducers  = {
  dailyForecastsList: dailyForecastsListReducer
}

export interface AppState {
  dailyForecastsList: DailyForecastsListState
}