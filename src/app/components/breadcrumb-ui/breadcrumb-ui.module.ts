import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbUiComponent } from './breadcrumb-ui.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';



@NgModule({
  declarations: [
    BreadcrumbUiComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule
  ],
  exports: [
    BreadcrumbUiComponent
  ],
})
export class BreadcrumbUiModule { }
