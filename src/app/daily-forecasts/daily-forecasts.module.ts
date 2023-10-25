import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyForecastsListViewComponent } from './daily-forecasts-list-view/daily-forecasts-list-view.component';
import { DailyForecastsService } from './daily-forecasts-list-view/daily-forecasts-list-view.service';
import { EffectsModule } from '@ngrx/effects';
import { DailyForecastsEffects } from '../store/daily-forecasts-list/effects';
import { StoreModule } from '@ngrx/store';
import { dailyForecastsListReducer } from '../store/daily-forecasts-list/reducer';



@NgModule({
  declarations: [
  
    DailyForecastsListViewComponent
  ],
  imports: [
    CommonModule,
    
    StoreModule.forFeature('forecasts', dailyForecastsListReducer),
    EffectsModule.forRoot([DailyForecastsEffects]),
    EffectsModule.forFeature([DailyForecastsEffects])
  ],
  providers: [DailyForecastsService]
})
export class DailyForecastsModule { }
