import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAlertComponent } from './modal-alert.component';
import { ButtonModule } from "primeng/button";



@NgModule({
  declarations: [
    ModalAlertComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    ModalAlertComponent
  ],
})
export class ModalAlertModule { }
