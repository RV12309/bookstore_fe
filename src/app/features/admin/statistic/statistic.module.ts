import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticComponent } from './statistic.component';
import { ChartModule } from 'primeng/chart';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: StatisticComponent
  }
]

@NgModule({
  declarations: [
    StatisticComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChartModule
  ]
})
export class StatisticModule { }
