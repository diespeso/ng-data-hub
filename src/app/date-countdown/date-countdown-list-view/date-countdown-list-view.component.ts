import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IDateCountdown } from 'src/app/models/date-countdown.model';
import { AppState } from 'src/app/store';
import { fetchDateCountdowns } from 'src/app/store/date-countdows-list/actions';

@Component({
  selector: 'app-date-countdown-list-view',
  templateUrl: './date-countdown-list-view.component.html',
  styleUrls: ['./date-countdown-list-view.component.css']
})
export class DateCountdownListViewComponent {

	dateCountdowns: IDateCountdown[] = [];

	constructor (private store: Store<AppState> ) {

		console.log('testing here?')

		this.store.select((state: AppState) => {
			console.log(state)
			return state.dateCountdownsList.data
		}
		).subscribe(val => {
			this.dateCountdowns = val
		})


	}

	ngOnInit() {
		console.log('enters here ok yes')

		this.store.dispatch(fetchDateCountdowns.trigger({ params: {}}))

		this.dateCountdowns = [...this.dateCountdowns, {
			finish: new Date(),
			name: 'testing',
			description: 'testing description'
		}]
		console.log('countdowns: ', this.dateCountdowns)
	}




}
