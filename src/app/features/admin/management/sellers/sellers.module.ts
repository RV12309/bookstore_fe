import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellersComponent } from './sellers.component';
import { RouterModule, Routes } from '@angular/router';
import { FilterModule } from 'src/app/components/filter/filter.module';
import { PageHeaderModule } from 'src/app/components/page-header/page-header.module';
import { TableUiModule } from 'src/app/components/table-ui/table-ui.module';
import { ButtonModule } from 'primeng/button';

const routes: Routes = [
  {
    path: '',
    component: SellersComponent
  }
]

@NgModule({
  declarations: [SellersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FilterModule,
    PageHeaderModule,
    TableUiModule,
    ButtonModule,
  ]
})
export class SellersModule { }
