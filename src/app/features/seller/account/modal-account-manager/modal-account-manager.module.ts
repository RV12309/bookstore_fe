import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAccountManagerComponent } from './modal-account-manager.component';
import { DirectivesModule } from 'src/app/core/directives/directives.module';
import { InputNumberModule } from 'primeng/inputnumber';
import { DateUiModule } from 'src/app/components/date-ui/date-ui.module';
import { DropdownUiModule } from 'src/app/components/dropdown-ui/dropdown-ui.module';
import { DividerModule } from 'primeng/divider';
import { BaseUploadModule } from 'src/app/components/base-upload/base-upload.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ModalAccountManagerComponent
  ],
  imports: [
    CommonModule,
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
    ModalAccountManagerComponent
  ],
})
export class ModalAccountManagerModule { }
