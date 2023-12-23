import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { PipesModule } from "src/app/core/pipes/pipes.module";
import { QuantityModule } from "src/app/components/quantity/quantity.module";
import {DividerModule} from 'primeng/divider';
import { ButtonModule } from "primeng/button";
import { TableUiModule } from "src/app/components/table-ui/table-ui.module";
import { InputTextModule } from "primeng/inputtext";
import { BreadcrumbUiModule } from "src/app/components/breadcrumb-ui/breadcrumb-ui.module";


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    PipesModule,
    QuantityModule,
    DividerModule,
    ButtonModule,
    TableUiModule,
    InputTextModule,
    BreadcrumbUiModule
  ],
  exports: [
    CartComponent
  ],
})
export class CartModule { }
