import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuantityComponent } from './quantity.component';



@NgModule({
  declarations: [
    QuantityComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    QuantityComponent
  ],
})
export class QuantityModule { }
