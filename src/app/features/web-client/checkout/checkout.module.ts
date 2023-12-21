import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { AddressModule } from "src/app/components/address/address.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { BaseUploadModule } from 'src/app/components/base-upload/base-upload.module';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { DropdownUiModule } from 'src/app/components/dropdown-ui/dropdown-ui.module';
import { DateUiModule } from 'src/app/components/date-ui/date-ui.module';
import { InputNumberModule } from 'primeng/inputnumber';
import { DirectivesModule } from 'src/app/core/directives/directives.module';


@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    AddressModule,
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
  ]
})
export class CheckoutModule { }
