import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalProfileRoutingModule } from './modal-profile-routing.module';
import { ModalProfileComponent } from './modal-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BaseUploadModule } from 'src/app/components/base-upload/base-upload.module';
import { DividerModule } from 'primeng/divider';
import { DropdownUiModule } from 'src/app/components/dropdown-ui/dropdown-ui.module';
import { InputNumberModule } from 'primeng/inputnumber';
import { DirectivesModule } from 'src/app/core/directives/directives.module';
import { DateUiModule } from 'src/app/components/date-ui/date-ui.module';


@NgModule({
  declarations: [
    ModalProfileComponent
  ],
  imports: [
    CommonModule,
    ModalProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    InputTextModule,
    ButtonModule,
    BaseUploadModule,
    DividerModule,
    DropdownUiModule,
    DateUiModule,
    InputNumberModule,
    DirectivesModule
  ],
  exports: [
    ModalProfileComponent
  ],
})
export class ModalProfileModule { }
