import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyForecastsListViewComponent } from './daily-forecasts/daily-forecasts-list-view/daily-forecasts-list-view.component';

const routes: Routes = [
  {path: 'daily-forecasts', component: DailyForecastsListViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
