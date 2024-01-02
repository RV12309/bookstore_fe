import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerLayoutComponent } from "./seller-layout.component";
import { AdminGuard } from '../../guards/admin.guard';

export const routes:Routes = [
  {
    path: '',
    component: SellerLayoutComponent,
    children: [
      {
        path:'books',
        loadChildren: () => import('src/app/features/seller/books/book-list/book-list.module').then(m => m.BookListModule),
        data: {
          breadcrumb: "Quản lý sách"
        }
      },
      {
        path:'books/categories',
        loadChildren: () => import('src/app/features/seller/categories/categories-list/categories-list.module').then(m => m.CategoriesListModule),
        data: {
          breadcrumb: "Danh mục"
        }
      },
      {
        path: 'order',
        loadChildren: () => import('src/app/features/seller/orders/order-list/order-list.module').then(m => m.OrderListModule),
        data: {
          breadcrumb: "Đơn hàng"
        }
      },
      // {
      //   path: 'statistics',
      //   component : HomeComponent
      // },
      {
        path: '',
        redirectTo: 'books',
        pathMatch: 'full'
      },
      {
        path: 'management/sellers',
        loadChildren: () => import('src/app/features/admin/management/sellers/sellers.module').then(m => m.SellersModule),
        data: {
          breadcrumb: "Quản lý người bán"
        },
        canActivate: [AdminGuard]
      },
      {
        path: 'management/customers',
        loadChildren: () => import('src/app/features/admin/management/customers/customers.module').then(m => m.CustomersModule),
        data: {
          breadcrumb: "Quản lý người mua"
        },
        canActivate: [AdminGuard]
      },
      // {
      //   path: '',
      //   redirectTo: 'management/sellers',
      //   pathMatch: 'full',
      //   canActivate: [AdminGuard]
      // },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerLayoutRoutingModule { }
