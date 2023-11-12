import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { RouterModule, Routes } from "@angular/router";
import { CardModule } from "primeng/card";
import { PaginatorUiModule } from "./paginator-ui";
import { DropdownUiModule } from "./dropdown-ui/dropdown-ui.module";
import { ButtonModule } from "primeng/button";
import { FileUploadModule } from "primeng/fileupload";

const routes: Routes = [
  {
    path: 'primeng',
    component: ComponentsComponent
  }
]

@NgModule({
  declarations: [
    ComponentsComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    PaginatorUiModule,
    DropdownUiModule,
    RouterModule.forChild(routes),
    ButtonModule,
    FileUploadModule
  ]
})
export class ComponentsModule { }
