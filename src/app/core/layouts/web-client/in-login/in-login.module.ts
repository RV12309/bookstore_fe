import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InLoginRoutingModule } from './in-login-routing.module';
import { InLoginComponent } from './in-login/in-login.component';
import { HeaderModule } from "src/app/components/header";
import { FooterModule } from "src/app/components/footer/footer.module";


@NgModule({
  declarations: [
    InLoginComponent
  ],
  imports: [
    CommonModule,
    InLoginRoutingModule,
    HeaderModule,
    FooterModule
  ],
  exports: [
    InLoginComponent
  ],
})
export class InLoginModule { }
