import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InLoginComponent } from "./in-login/in-login.component";

const routes: Routes = [
  {
    path: '',
    component: InLoginComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/features/web-client/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        loadChildren: () => import('src/app/features/web-client/books-list/books-list.module').then(m => m.BooksListModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InLoginRoutingModule { }
