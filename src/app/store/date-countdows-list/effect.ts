import { Injectable } from "@angular/core";

import * as storeActions from './actions'
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs";
import { DateCountdownService } from "src/app/date-countdown/date-countdown.service";

@Injectable()
export class DateCountdownsEffects {
	constructor (private actions: Actions, private service: DateCountdownService) {}


	fetchAll = createEffect(() => {
		return this.actions.pipe(
			ofType(storeActions.fetchDateCountdowns.trigger),
			exhaustMap(() => {
				return this.service.fetchAll()
				.pipe(map(data => storeActions
					.fetchDateCountdowns.fulfilled({data})))
			})
		)
	})
}
