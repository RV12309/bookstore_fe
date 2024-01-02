import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileLayoutComponent } from "./profile-layout.component";

const routes: Routes = [
  {
    path: '',
    component: ProfileLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/features/web-client/profile/modal-profile/modal-profile.module').then(m => m.ModalProfileModule)
      },
      // {
      //   path: '',
      //   loadChildren: () => import('src/app/features/web-client/checkout/checkout.module').then(m => m.CheckoutModule)
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileLayoutRoutingModule { }
