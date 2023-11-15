import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateUiComponent } from './date-ui.component';
import { CalendarModule } from "primeng/calendar";
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    DateUiComponent
  ],
  imports: [
    CommonModule,
    CalendarModule,
    FormsModule
  ],
  exports: [
    DateUiComponent
  ],
})
export class DateUiModule { }
