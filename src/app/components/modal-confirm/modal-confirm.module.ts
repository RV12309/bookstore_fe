import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalConfirmComponent } from './modal-confirm.component';
import { ButtonModule } from "primeng/button";



@NgModule({
  declarations: [
    ModalConfirmComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    ModalConfirmComponent
  ],
})
export class ModalConfirmModule { }
