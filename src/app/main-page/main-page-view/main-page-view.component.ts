import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page-view',
  templateUrl: './main-page-view.component.html',
  styleUrls: ['./main-page-view.component.css']
})
export class MainPageViewComponent {

  goToForecasts() {
    console.log("testing works")
      this.router.navigateByUrl('daily-forecasts')
  }

  constructor(private router: Router) {}

}
