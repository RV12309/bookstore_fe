import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsListRoutingModule } from './products-list-routing.module';
import { ProductsListComponent } from './products-list.component';
import { CardModule } from "primeng/card";
import {AccordionModule} from 'primeng/accordion';
import {CheckboxModule} from 'primeng/checkbox';
import {SliderModule} from 'primeng/slider';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { DropdownUiModule } from "src/app/components/dropdown-ui/dropdown-ui.module";
import { BookCardModule } from "src/app/components/book-card";


@NgModule({
  declarations: [
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    ProductsListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    AccordionModule,
    CheckboxModule,
    SliderModule,
    ButtonModule,
    DropdownUiModule,
    BookCardModule
  ],
  exports: [
    ProductsListComponent
  ],
})
export class ProductsListModule { }
