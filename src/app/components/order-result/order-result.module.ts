import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderResultComponent } from './order-result.component';
import { ButtonModule } from "primeng/button";
import { RouterModule, Routes } from "@angular/router";

const routes:Routes = [
  {
    path: "",
    component: OrderResultComponent
  }
]


@NgModule({
  declarations: [
    OrderResultComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    OrderResultComponent
  ]
})
export class OrderResultModule { }
