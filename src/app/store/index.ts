import { DailyForecastState } from "./daily-forecast/reducer";
import { DailyForecastsListState, dailyForecastsListReducer } from "./daily-forecasts-list/reducer";
import { DateCountdownsListState, dateCountdownsListReducer } from "./date-countdows-list/reducer";


export const reducers  = {
  dailyForecastsList: dailyForecastsListReducer,
	dateCountdownsList: dateCountdownsListReducer,
}

export interface AppState {
  dailyForecastsList: DailyForecastsListState,
  dailyForecast: DailyForecastState,
	dateCountdownsList: DateCountdownsListState
}
