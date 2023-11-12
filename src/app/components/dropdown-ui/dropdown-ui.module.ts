import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownUiComponent } from './dropdown-ui.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    DropdownUiComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DropdownUiComponent
  ],
})
export class DropdownUiModule { }
