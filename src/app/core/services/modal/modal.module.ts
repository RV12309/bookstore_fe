import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { ModalConfirmModule } from "src/app/components/modal-confirm/modal-confirm.module";
import { ModalAlertModule } from "src/app/components/modal-alert/modal-alert.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DynamicDialogModule,
    DialogModule,
    ModalConfirmModule,
    ModalAlertModule
  ]
})
export class ModalModule { }
