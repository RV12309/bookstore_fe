import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerLayoutComponent } from "./seller-layout.component";
import { AdminGuard } from '../../guards/admin.guard';
import { SellerGuard } from '../../guards/seller.guard';

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
        },
        canActivate: [SellerGuard]
      },
      {
        path:'books/categories',
        loadChildren: () => import('src/app/features/seller/categories/categories-list/categories-list.module').then(m => m.CategoriesListModule),
        data: {
          breadcrumb: "Danh mục"
        },
        canActivate: [SellerGuard]
      },
      {
        path: 'order',
        data: {
          breadcrumb: "Đơn hàng"
        },
        children: [
          {
            path: '', 
            loadChildren: () => import('src/app/features/seller/orders/order-list/order-list.module').then(m => m.OrderListModule),
            data: {
              breadcrumb: ''
            }
          },
          {
            path: 'detail', 
            loadChildren: () => import('src/app/features/seller/orders/order-detail/order-detail.module').then(m => m.OrderDetailModule),
            data: {
              breadcrumb: ''
            }
          },
        ],
        canActivate: [SellerGuard]
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
      {
        path: 'statistics',
        loadChildren: () => import('src/app/features/admin/statistic/statistic.module').then(m => m.StatisticModule),
        data: {
          breadcrumb: "Thống kê"
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
