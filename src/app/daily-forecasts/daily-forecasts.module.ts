import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyForecastsListViewComponent } from './daily-forecasts-list-view/daily-forecasts-list-view.component';
import { DailyForecastsService } from './daily-forecasts-list-view/daily-forecasts-list-view.service';
import { EffectsModule } from '@ngrx/effects';
import { DailyForecastsEffects } from '../store/daily-forecasts-list/effects';
import { StoreModule } from '@ngrx/store';
import { dailyForecastsListReducer } from '../store/daily-forecasts-list/reducer';
import { DailyForecastViewComponent } from './daily-forecast-view/daily-forecast-view.component';
import { DailyForecastEffects } from '../store/daily-forecast/effects';
import { dailyForecastReducer } from '../store/daily-forecast/reducer';
import { ForecastCardComponent } from './forecast-card/forecast-card.component';


import { NzButtonModule } from 'ng-zorro-antd/button';
import  {NzGridModule} from 'ng-zorro-antd/grid'
import {NzCardModule  } from 'ng-zorro-antd/card'


@NgModule({
  declarations: [
    DailyForecastsListViewComponent,
    DailyForecastViewComponent,
    ForecastCardComponent
  ],
  imports: [
    CommonModule,

    NzGridModule,
    NzButtonModule,
    NzCardModule,

    StoreModule.forFeature('forecasts', dailyForecastsListReducer,),
    StoreModule.forFeature('forecast', dailyForecastReducer),
    EffectsModule.forRoot([DailyForecastsEffects, DailyForecastEffects]),
    EffectsModule.forFeature([DailyForecastsEffects, DailyForecastEffects])
  ],
  providers: [DailyForecastsService]
})
export class DailyForecastsModule { }
