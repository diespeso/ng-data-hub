
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { DailyForecastsEffects } from './store/daily-forecasts-list/effects';
import { DailyForecastsModule } from './daily-forecasts/daily-forecasts.module';

import  { ButtonModule} from 'primeng/button'
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MainPageModule } from './main-page/main-page.module';
import { MainPageViewComponent } from './main-page/main-page-view/main-page-view.component';
import { DateCountdownsEffects } from './store/date-countdows-list/effect';
import { DateCountdownModule } from './date-countdown/date-countdown.module';


registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
		BrowserAnimationsModule,
    AppRoutingModule,
    DailyForecastsModule,
		DateCountdownModule,
		MainPageModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([DailyForecastsEffects, DateCountdownsEffects]),
		ButtonModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
