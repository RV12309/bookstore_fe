import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileLayoutRoutingModule } from './profile-layout-routing.module';
import { ProfileLayoutComponent } from './profile-layout.component';
import { DividerModule } from "primeng/divider";
import { AvatarModule } from 'primeng/avatar';
import { BreadcrumbUiModule } from "src/app/components/breadcrumb-ui/breadcrumb-ui.module";

@NgModule({
  declarations: [
    ProfileLayoutComponent
  ],
  imports: [
    CommonModule,
    ProfileLayoutRoutingModule,
    DividerModule,
    AvatarModule,
    BreadcrumbUiModule
  ]
})
export class ProfileLayoutModule { }
