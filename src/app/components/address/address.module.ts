import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address.component';
import { DropdownUiModule } from "../dropdown-ui/dropdown-ui.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    AddressComponent
  ],
  imports: [
    CommonModule,
    DropdownUiModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AddressComponent
  ],
})
export class AddressModule { }
