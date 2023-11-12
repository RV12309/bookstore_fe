import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { PaginatorUiComponent } from './paginator-ui.component';



@NgModule({
  declarations: [
    PaginatorUiComponent
  ],
  imports: [
    CommonModule,
    PaginatorModule
  ],
  exports: [
    PaginatorUiComponent
  ]
})
export class PaginatorUiModule { }
