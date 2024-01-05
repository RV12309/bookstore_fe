import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paymentStatus'
})
export class PaymentStatusPipe implements PipeTransform {

  transform(status: string): any {
    let text;
    switch (status) {
      case 'PENDING':
        text = 'Chờ xử lý ';
        break;
      case 'PAID':
        text = 'Đã hoàn thành';
        break;
      case 'CANCELLED':
        text = 'Đã hủy';
        break;
      case 'PROCESSING':
        text = 'Đang XỬ LÝ';
        break;
    }
    return text
  }


}
