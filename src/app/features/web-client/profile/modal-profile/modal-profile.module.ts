import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalProfileRoutingModule } from './modal-profile-routing.module';
import { ModalProfileComponent } from './modal-profile.component';


@NgModule({
  declarations: [
    ModalProfileComponent
  ],
  imports: [
    CommonModule,
    ModalProfileRoutingModule
  ],
  exports: [
    ModalProfileComponent
  ],
})
export class ModalProfileModule { }
