import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailComponent } from './order-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbUiModule } from 'src/app/components/breadcrumb-ui/breadcrumb-ui.module';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { DividerModule } from 'primeng/divider';

const routes: Routes = [
  {
    path: '',
    component: OrderDetailComponent
  },
]

@NgModule({
  declarations: [
    OrderDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    BreadcrumbUiModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    PipesModule,
    DividerModule,
  ]
})
export class OrderDetailModule { }
