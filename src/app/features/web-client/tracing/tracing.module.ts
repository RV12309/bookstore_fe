import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TracingComponent } from './tracing.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbUiModule } from "src/app/components/breadcrumb-ui/breadcrumb-ui.module";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";

const routes: Routes = [
  {
    path: '',
    component: TracingComponent
  },
]

@NgModule({
  declarations: [
    TracingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    BreadcrumbUiModule,
    ButtonModule,
    CardModule,
    InputTextModule
  ]
})
export class TracingModule { }
