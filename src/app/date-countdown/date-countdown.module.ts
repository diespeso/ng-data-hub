import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateCountdownListViewComponent } from './date-countdown-list-view/date-countdown-list-view.component';
import { DateCountdownService } from './date-countdown.service';
import { StoreModule } from '@ngrx/store';
import { dateCountdownsListReducer } from '../store/date-countdows-list/reducer';
import { EffectsModule } from '@ngrx/effects';
import { DateCountdownsEffects } from '../store/date-countdows-list/effect';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    DateCountdownListViewComponent
  ],
  imports: [
    CommonModule,

		StoreModule.forFeature('dateCountdownsList', dateCountdownsListReducer ),
		EffectsModule.forRoot([DateCountdownsEffects]),
		EffectsModule.forFeature([DateCountdownsEffects])
  ],
	providers: [DateCountdownService]
})
export class DateCountdownModule { }
