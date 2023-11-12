import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { ButtonModule } from "primeng/button";
import { RouterModule } from "@angular/router";



@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule
  ]
})
export class NotFoundModule { }
