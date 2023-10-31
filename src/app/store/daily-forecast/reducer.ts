import { createReducer, on } from "@ngrx/store";
import { IDailyForecast } from "src/app/models/daily-forecast.model";
import { fetchForecast } from "./actions";
import { fetchForecasts } from "../daily-forecasts-list/actions";



export interface DailyForecastState {
  data: IDailyForecast | null,
  loading: boolean,
  error: any
}

export const initialState: DailyForecastState = {
  data: null,
  loading: false,
  error: null
}

export const dailyForecastReducer = createReducer(initialState,
    on(fetchForecast.trigger, (state, action) => {
    return {
      ...state,
      loading: true
    }
    }),
    on(fetchForecast.fulfilled, (state, action) => {
      return {
        ...state,
        data: action.data,
        loading: false
      }
    }),
    on(fetchForecast.failed, (state, action) => {
      return {
        ...state,
        error: action.except,
        loading: false,
      }
    })
  )
