import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyForecastsListViewComponent } from './daily-forecasts/daily-forecasts-list-view/daily-forecasts-list-view.component';
import { MainPageViewComponent } from './main-page/main-page-view/main-page-view.component';
import { DailyForecastViewComponent } from './daily-forecasts/daily-forecast-view/daily-forecast-view.component';

const routes: Routes = [
  {path: 'daily-forecasts', component: DailyForecastsListViewComponent},
  { path: '', component: MainPageViewComponent},
  { path: 'daily-forecasts/today', component: DailyForecastViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
