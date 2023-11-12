import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { BookListComponent } from './book-list.component';
import { BookCreateModule } from "../book-create/book-create.module";
import { FilterModule } from "src/app/components/filter/filter.module";
import { PageHeaderModule } from "src/app/components/page-header/page-header.module";
import { TableUiModule } from "src/app/components/table-ui/table-ui.module";

const routes:Routes = [
  {
    path: '',
    component: BookListComponent
  }
]

@NgModule({
  declarations: [
    BookListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BookCreateModule,
    FilterModule,
    PageHeaderModule,
    TableUiModule,
    ButtonModule
  ],
  exports: [
    BookListComponent
  ],
})
export class BookListModule { }
