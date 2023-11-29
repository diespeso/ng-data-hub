import { createReducer, on } from "@ngrx/store";
import { IDateCountdown } from "src/app/models/date-countdown.model";
import { fetchDateCountdowns } from "./actions";

export interface DateCountdownsListState {
	data: IDateCountdown[],
	loading: boolean
}

const initialState: DateCountdownsListState  = {
	data: [],
	loading: false
}

export const dateCountdownsListReducer = createReducer(initialState,
	on(fetchDateCountdowns.fulfilled, (state, action) => {
		return {
			...state,
			data: action.data,
			loading: false
		}
	}),
	on(fetchDateCountdowns.trigger, (state, action) => {
		return {
			...state,
			loading: true
		}
	})
	)
