import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { findIndex } from 'rxjs';
import { ModalService } from 'src/app/core/services/modal';
import { OrdersService } from 'src/app/core/services/orders/orders.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss'],
})
export class StatisticComponent implements OnInit {
  public userData: any;
  public orderData: any;
  public revenueData: any;
  public form!: FormGroup;
  public types = [
    { code: 'day', name: 'Theo ngày', value: 'DAY' },
    { code: 'week', name: 'Theo tuần', value: 'WEEK' },
    { code: 'month', name: 'Theo tháng', value: 'MONTH' },
    { code: 'quarter', name: 'Theo quý', value: 'QUARTER' },
    { code: 'year', name: 'Theo năm', value: 'YEAR' },
  ];
  public options = {
    plugins: {
      //   datalabels: {
      //     display: true,
      //     align: 'bottom',
      //     color: '#fff',
      //   },
      // },
    },
  };

  constructor(
    private userService: UserService,
    private modalService: ModalService,
    private orderService: OrdersService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      type: [this.types[2]],
    });
    // this.getStatistic();
    this.getOrderStatistic();
    // this.getRevenueStatistic();
    this.form.controls['type'].valueChanges.subscribe({
      next: (res) => this.getOrderStatistic(),
      error: (error) =>
        this.modalService.alert({
          type: error,
          message: error.message,
        }),
    });
    // this.getOrderStatistic();
  }

  public getStatistic() {
    this.userService.getStatistic().subscribe({
      next: (res) => {
        console.log(res);
        this.userData = {
          labels: res?.data?.userStatistic.map((item: any) => item.type),
          datasets: [
            {
              data: res?.data?.userStatistic.map((item: any) => item.count),
              backgroundColor: ['red', 'green', 'blue'],
            },
          ],
        };
      },
      error: (error) =>
        this.modalService.alert({
          type: error,
          message: error.message,
        }),
    });
  }

  public getOrderStatistic() {
    const params = {
      from: '',
      to: '',
      type: this.form.controls['type'].value?.value || 'MONTH',
    };
    let label: string[] = [];
    switch (params.type) {
      case 'MONTH':
        for(let i = 1; i < 5; i++){
          label.push('Tuần '+ i)
        }
        break;
      case 'DAY':
        for(let i = 1; i < 25; i++){
          label.push('Giờ thứ '+ i)
        }
        break;
      case 'WEEK':
        for(let i = 1; i < 8; i++){
          label.push('Ngày thứ '+ i)
        }
        break;
      case 'QUARTER':
        for(let i = 1; i < 5; i++){
          label.push('Tháng thứ '+ i)
        }
        break;
      case 'YEAR':
        for(let i = 1; i < 13; i++){
          label.push('Tháng '+ i)
        }
        break;
      default:
        for(let i = 1; i < 5; i++){
          label.push('Tuần '+ i)
        }
        break;
    }
    this.orderService.getOrderStatistic(params).subscribe({
      next: (res) => {
        console.log(res?.data?.map((data: any) => data?.totalOrder));
        this.orderData = {
          // labels: ['Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4'],
          labels: label,
          datasets: [
            {
              label: 'Đơn hàng',
              data: res?.data?.map((data: any) => data?.totalOrder),
              backgroundColor: ['green'],
            },
          ],
        };
        this.revenueData = {
          labels: label,
          // labels: label,
          datasets: [
            {
              label: 'Doanh số',
              data: res?.data?.map((data: any) => data?.totalAmount),
              backgroundColor: ['orange'],
            },
          ],
        };
      },
      error: (error) =>
        this.modalService.alert({
          type: error,
          message: error.message,
        }),
    });
  }

  public getRevenueStatistic() {
    const params = {
      from: '',
      to: '',
      type: 'MONTH',
    };
    // let label: string[] = [];
    // switch (params.type) {
    //   case 'MONTH':
    //     for(let i = 1; i < 5; i++){
    //       label.push('Tuần '+ i)
    //     }
    //     break;
    //   case 'DAY':
    //     for(let i = 1; i < 25; i++){
    //       label.push('Giờ thứ '+ i)
    //     }
    //     break;
    //   case 'WEEK':
    //     for(let i = 1; i < 8; i++){
    //       label.push('Ngày thứ '+ i)
    //     }
    //     break;
    //   case 'QUARTER':
    //     for(let i = 1; i < 5; i++){
    //       label.push('Tháng thứ '+ i)
    //     }
    //     break;
    //   case 'YEAR':
    //     for(let i = 1; i < 13; i++){
    //       label.push('Tháng '+ i)
    //     }
    //     break;
    //   default:
    //     for(let i = 1; i < 5; i++){
    //       label.push('Tuần '+ i)
    //     }
    //     break;
    // }
    this.orderService.getRevenueStatistic(params).subscribe({
      next: (res) => {
        console.log(res?.data?.map((data: any) => data?.totalOrder));
        this.revenueData = {
          labels: ['Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4'],
          // labels: label,
          datasets: [
            {
              label: 'Đơn hàng',
              data: res?.data?.map((data: any) => data?.totalAmount),
              backgroundColor: ['orange'],
            },
          ],
        };
      },
      error: (error) =>
        this.modalService.alert({
          type: error,
          message: error.message,
        }),
    });
  }
}
