import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateUiComponent } from './date-ui.component';
import { CalendarModule } from "primeng/calendar";



@NgModule({
  declarations: [
    DateUiComponent
  ],
  imports: [
    CommonModule,
    CalendarModule
  ],
  exports: [
    DateUiComponent
  ],
})
export class DateUiModule { }
