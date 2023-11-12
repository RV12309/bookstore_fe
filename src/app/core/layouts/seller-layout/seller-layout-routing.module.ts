import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerLayoutComponent } from "./seller-layout.component";

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
      // {
      //   path: 'order',
      //   component: HomeComponent
      // },
      // {
      //   path: 'statistics',
      //   component : HomeComponent
      // },
      // {
      //   path: '',
      //   redirectTo: 'books',
      //   pathMatch: 'full'
      // }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerLayoutRoutingModule { }
