import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalProfileComponent } from './modal-profile.component';

const routes: Routes = [
  {
    path: '',
    component: ModalProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalProfileRoutingModule { }
