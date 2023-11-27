import { DecimalPipe } from "@angular/common";
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {
  constructor(
    private decimalPipe: DecimalPipe
  ) {

  }

  transform(value: number, unit:string = 'đ') {
    const valueConvert = this.decimalPipe.transform(value)?.toString()
    .replaceAll('.', '&')
    .replaceAll(',','.')
    .replaceAll('&',',') + ' ' + unit
    return valueConvert;
  }

}
