import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address.component';
import { DropdownUiModule } from "../dropdown-ui/dropdown-ui.module";



@NgModule({
  declarations: [
    AddressComponent
  ],
  imports: [
    CommonModule,
    DropdownUiModule
  ],
  exports: [
    AddressComponent
  ],
})
export class AddressModule { }
