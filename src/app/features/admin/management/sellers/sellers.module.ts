import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellersComponent } from './sellers.component';
import { RouterModule, Routes } from '@angular/router';

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
    RouterModule.forChild(routes)
  ]
})
export class SellersModule { }
