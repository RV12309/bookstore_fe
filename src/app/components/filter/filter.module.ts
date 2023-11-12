import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DropdownUiModule } from "../dropdown-ui/dropdown-ui.module";
import { DateUiModule } from "../date-ui/date-ui.module";



@NgModule({
  declarations: [
    FilterComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    DropdownUiModule,
    DateUiModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    FilterComponent
  ],
})
export class FilterModule { }
