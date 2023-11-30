import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import {BadgeModule} from 'primeng/badge';
import { ModalProfileModule } from 'src/app/features/web-client/profile/modal-profile/modal-profile.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    AvatarModule,
    MenuModule,
    BadgeModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
