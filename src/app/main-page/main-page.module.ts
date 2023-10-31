import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageViewComponent } from './main-page-view/main-page-view.component';
import { NzButtonModule } from 'ng-zorro-antd/button';



@NgModule({
  declarations: [
    MainPageViewComponent
  ],
  imports: [
    CommonModule,
NzButtonModule
  ]
})
export class MainPageModule { }
