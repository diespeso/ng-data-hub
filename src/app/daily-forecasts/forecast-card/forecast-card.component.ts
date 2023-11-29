import { Component, Input } from '@angular/core';

import sunnyOutline from '@iconify/icons-material-symbols/sunny-outline'

@Component({
  selector: 'app-forecast-card',
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.css']
})
export class ForecastCardComponent {

	iconSunny = sunnyOutline;

 @Input() minTemp: number
 @Input() maxTemp: number

 constructor() {
	console.log(this.iconSunny)
 }
}
