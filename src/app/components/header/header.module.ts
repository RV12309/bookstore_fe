import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    AvatarModule,
    MenuModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
