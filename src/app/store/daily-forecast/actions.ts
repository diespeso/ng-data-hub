import { createAction, props} from "@ngrx/store";
import { IDailyForecast } from "src/app/models/daily-forecast.model";

export const fetchForecast = {
  trigger: createAction('[DailyForecast] Trigger'),
  fulfilled: createAction('[DailyForecast] Fulfilled', props<{data: IDailyForecast}>()),
  failed: createAction('[DailyForecast] Failed', props<{except: String}>())
}
