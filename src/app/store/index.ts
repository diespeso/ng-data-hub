import { DailyForecastState } from "./daily-forecast/reducer";
import { DailyForecastsListState, dailyForecastsListReducer } from "./daily-forecasts-list/reducer";


export const reducers  = {
  dailyForecastsList: dailyForecastsListReducer
}

export interface AppState {
  dailyForecastsList: DailyForecastsListState,
  dailyForecast: DailyForecastState,
}
