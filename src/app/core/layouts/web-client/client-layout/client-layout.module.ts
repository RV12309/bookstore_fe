import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientLayoutComponent } from './client-layout.component';
import { HeaderModule } from "src/app/components/header";
import { FooterModule } from "src/app/components/footer/footer.module";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/features/web-client/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        loadChildren: () => import('src/app/features/web-client/products/products-list/products-list.module').then(m => m.ProductsListModule)
      },
      {
        path: 'products/:isbn ',
        loadChildren: () => import('src/app/features/web-client/products/product-detail/product-detail.module').then(m => m.ProductDetailModule)
      }
    ]
  },
];

@NgModule({
  declarations: [
    ClientLayoutComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    RouterModule.forChild(routes)
  ]
})
export class ClientLayoutModule { }
