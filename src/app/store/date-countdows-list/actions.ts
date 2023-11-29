import { createAction, props } from "@ngrx/store";
import { IDateCountdown } from "src/app/models/date-countdown.model";

// export const fetchDateCountdownsList = createAction('[DateCountdownsList] Fetch', props<{ data: IDateCountdown[]}>())

export const fetchDateCountdowns = {
	trigger: createAction('[DateCountdownsList] Trigger' , props<{ params: {}}>()),
	pending: createAction('[DateCountdownsList] Pending'),
	fulfilled: createAction('[DateCountdownsList] Fulfillled', props<{data: IDateCountdown[]}>())
}
