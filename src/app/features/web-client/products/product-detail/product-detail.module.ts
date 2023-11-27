import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';
import { GalleriaUiModule } from "src/app/components/galleria-ui/galleria-ui.module";
import { SkeletonModule } from "primeng/skeleton";
import { BreadcrumbUiModule } from "src/app/components/breadcrumb-ui/breadcrumb-ui.module";
import {RatingModule} from 'primeng/rating';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RatingUiModule } from "src/app/components/rating-ui/rating-ui.module";
import {ImageModule} from 'primeng/image';
import { ButtonModule } from "primeng/button";
import { PipesModule } from "src/app/core/pipes/pipes.module";
import { BookCardModule } from "src/app/components/book-card";


@NgModule({
  declarations: [
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductDetailRoutingModule,
    GalleriaUiModule,
    SkeletonModule,
    BreadcrumbUiModule,
    RatingModule,
    FormsModule,
    ReactiveFormsModule,
    RatingUiModule,
    ImageModule,
    ButtonModule,
    PipesModule,
    BookCardModule
  ],
  exports: [
    ProductDetailComponent
  ],
})
export class ProductDetailModule { }
