import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseUploadComponent } from './base-upload.component';
import { FileUploadModule } from 'primeng/fileupload';
import { PipesModule } from "src/app/core/pipes/pipes.module";
import { MessagesModule } from "primeng/messages";
import { ToastModule } from "primeng/toast";
import { ImageUiModule } from "../image-ui/image-ui.module";
import { ImagekitioAngularModule } from "imagekitio-angular";



@NgModule({
  declarations: [
    BaseUploadComponent
  ],
  imports: [
    CommonModule,
    FileUploadModule,
    PipesModule,
    MessagesModule,
    ToastModule,
    ImageUiModule,
    ImagekitioAngularModule
  ],
  exports: [
    BaseUploadComponent
  ],
})
export class BaseUploadModule { }
