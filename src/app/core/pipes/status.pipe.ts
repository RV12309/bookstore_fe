import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(status: string): any {
    let text;
    switch (status) {
      case 'PENDING':
        text = 'Chờ xử lý ';
        break;
      case 'COMPLETED':
        text = 'Đã hoàn thành';
        break;
      case 'PROCESSING':
        text = 'Đang xử lý';
        break;
      case 'SHIPPING':
        text = 'Đang giao';
        break;
      case 'CANCELLED':
        text = 'Đã hủy';
        break;
    }
    return text
  }

}
