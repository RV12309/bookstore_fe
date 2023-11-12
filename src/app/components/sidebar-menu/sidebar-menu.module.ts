import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarMenuComponent } from './sidebar-menu.component';
import { DividerModule } from "primeng/divider";
import { RouterModule } from "@angular/router";
import { ButtonModule } from "primeng/button";



@NgModule({
  declarations: [
    SidebarMenuComponent
  ],
  imports: [
    CommonModule,
    DividerModule,
    RouterModule,
    ButtonModule
  ],
  exports: [
    SidebarMenuComponent
  ],
})
export class SidebarMenuModule { }
