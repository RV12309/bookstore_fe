import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableUiComponent } from './table-ui.component';
import { TableModule } from 'primeng/table';
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { TooltipModule } from 'primeng/tooltip';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  declarations: [
    TableUiComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    CardModule,
    ButtonModule,
    TooltipModule,
    CheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    SkeletonModule
  ],
  exports: [
    TableUiComponent
  ],
})
export class TableUiModule { }
