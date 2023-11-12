import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header.component';
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";



@NgModule({
  declarations: [
    PageHeaderComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule
  ],
  exports: [
    PageHeaderComponent
  ],
})
export class PageHeaderModule { }
