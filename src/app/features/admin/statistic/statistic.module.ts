import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticComponent } from './statistic.component';
import { ChartModule } from 'primeng/chart';
import { RouterModule, Routes } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { DropdownUiModule } from 'src/app/components/dropdown-ui/dropdown-ui.module';
import { ReactiveFormsModule } from '@angular/forms';

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
    ChartModule,
    DropdownUiModule,
    ReactiveFormsModule
  ]
})
export class StatisticModule { }
