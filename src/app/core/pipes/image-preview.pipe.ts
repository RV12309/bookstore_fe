import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePreview'
})
export class ImagePreviewPipe implements PipeTransform {

  transform(value: File, args?: any): any {
    return URL.createObjectURL(value);
  }

}
