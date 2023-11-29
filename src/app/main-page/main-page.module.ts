import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageViewComponent } from './main-page-view/main-page-view.component';

import { ButtonModule} from 'primeng/button'

@NgModule({
  declarations: [
    MainPageViewComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
  ]
})
export class MainPageModule { }
