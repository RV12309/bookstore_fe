import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesListComponent } from './categories-list.component';
import { RouterModule, Routes } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { ModalCategoriesCreateModule } from "../modal-categories-create/modal-categories-create.module";
import { FilterModule } from "src/app/components/filter/filter.module";
import { PageHeaderModule } from "src/app/components/page-header/page-header.module";
import { TableUiModule } from "src/app/components/table-ui/table-ui.module";

const routes:Routes = [
  {
    path: "",
    component: CategoriesListComponent
  }
]

@NgModule({
  declarations: [
    CategoriesListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FilterModule,
    PageHeaderModule,
    TableUiModule,
    ButtonModule,
    ModalCategoriesCreateModule
  ],
  exports: [
    CategoriesListComponent
  ],
})
export class CategoriesListModule { }
