import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientLayoutComponent } from './client-layout.component';
import { HeaderModule } from "src/app/components/header";
import { FooterModule } from "src/app/components/footer/footer.module";
import { RouterModule, Routes } from "@angular/router";
import { LoggedGuard } from 'src/app/core/guards/logged.guard';


const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/features/web-client/home/home.module').then(m => m.HomeModule),
        data: {
          breadcrumb: ''
        }
      },
      {
        path: 'products',
        data: {
          breadcrumb: 'Sản phẩm'
        },
        children: [
          {
            path: '',
            loadChildren: () => import('src/app/features/web-client/products/products-list/products-list.module').then(m => m.ProductsListModule),
            data: {
              breadcrumb: ''
            }
          },
          {
            path: ':isbn',
            loadChildren: () => import('src/app/features/web-client/products/product-detail/product-detail.module').then(m => m.ProductDetailModule),
            data: {
              breadcrumb: 'Thông tin sản phẩm'
            }
          }
        ]
      },
      {
        path: 'cart',
        loadChildren: () => import('src/app/features/web-client/cart/cart.module').then( m => m.CartModule),
        data: {
          breadcrumb: 'Giỏ hàng'
        }
      },
      {
        path: 'checkout',
        loadChildren: () => import('src/app/features/web-client/checkout/checkout.module').then( m => m.CheckoutModule),
        data: {
          breadcrumb: 'Thanh toán'
        }
      },
      {
        path: 'order-success',
        loadChildren: () => import('src/app/components/order-result/order-result.module').then( m => m.OrderResultModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('src/app/features/web-client/profile/profile-layout/profile-layout.module').then(m => m.ProfileLayoutModule),
        canActivate: [LoggedGuard]
      },
      {
        path: 'tracing',
        loadChildren: () => import('src/app/features/web-client/tracing/tracing.module').then(m => m.TracingModule),
      },
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
