import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePreviewPipe } from "./image-preview.pipe";
import { SafeUrlPipe } from './safe-url.pipe';
import { PricePipe } from './price.pipe';
import { StatusPipe } from './status.pipe';
import { PaymentStatusPipe } from './payment-status.pipe';



@NgModule({
  declarations: [
    ImagePreviewPipe,
    SafeUrlPipe,
    PricePipe,
    StatusPipe,
    PaymentStatusPipe,
    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImagePreviewPipe,
    SafeUrlPipe,
    PricePipe,
    StatusPipe,
    PaymentStatusPipe
  ],
})
export class PipesModule { }
