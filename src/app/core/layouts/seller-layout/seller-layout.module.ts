import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerLayoutRoutingModule } from './seller-layout-routing.module';
import { SellerLayoutComponent } from './seller-layout.component';
import { DividerModule } from 'primeng/divider';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarMenuModule } from "src/app/components/sidebar-menu/sidebar-menu.module";


@NgModule({
  declarations: [
    SellerLayoutComponent
  ],
  imports: [
    CommonModule,
    SellerLayoutRoutingModule,
    InputTextModule,
    DividerModule,
    AvatarModule,
    MenuModule,
    BadgeModule,
    SidebarMenuModule
  ]
})
export class SellerLayoutModule { }
