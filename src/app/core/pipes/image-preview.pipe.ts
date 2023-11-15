import { Pipe, PipeTransform } from '@angular/core';
import { SafeUrlPipe } from "./safe-url.pipe";

@Pipe({
  name: 'imagePreview'
})
export class ImagePreviewPipe implements PipeTransform {

  constructor(
    private safeUrlPipe: SafeUrlPipe
  ){}

  transform(value: File, args?: any): any {
      return this.safeUrlPipe.transform(URL.createObjectURL(value));
  }

}
