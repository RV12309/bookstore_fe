import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';
import { GalleriaUiModule } from "src/app/components/galleria-ui/galleria-ui.module";


@NgModule({
  declarations: [
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductDetailRoutingModule,
    GalleriaUiModule
  ],
  exports: [
    ProductDetailComponent
  ],
})
export class ProductDetailModule { }
