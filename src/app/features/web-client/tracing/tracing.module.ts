import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TracingComponent } from './tracing.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    ReactiveFormsModule
  ]
})
export class TracingModule { }
