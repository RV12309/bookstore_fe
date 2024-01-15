import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { findIndex } from 'rxjs';
import { ModalService } from 'src/app/core/services/modal';
import { OrdersService } from 'src/app/core/services/orders/orders.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {

  public userData: any;
  public orderData: any;
  public form!: FormGroup;
  public types = [
    {code: 'day', name: 'Theo ngày', value: 'DAY'},
    {code: 'week', name: 'Theo tuần', value: 'WEEK'},
    {code: 'month', name: 'Theo tháng', value: 'MONTH'},
    {code: 'quarter', name: 'Theo quý', value: 'QUARTER'},
    {code: 'year', name: 'Theo năm', value: 'YEAR'},
  ]
  public  options = {
    plugins: {
    //   datalabels: {
    //     display: true,
    //     align: 'bottom',
    //     color: '#fff',
    //   },
    // },
  }
}


  constructor(
    private userService: UserService,
    private modalService: ModalService,
    private orderService: OrdersService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      type: [this.types[2]]
    })
    this.getStatistic();
    this.getOrderStatistic();
    this.form.controls['type'].valueChanges.subscribe({
      next: (res) => this.getOrderStatistic(),
      error: (error) => this.modalService.alert({
        type: error,
        message: error.message
      })
    })
    // this.getOrderStatistic();
    
  }

  public getStatistic(){
    this.userService.getStatistic().subscribe({
      next: (res) => {
        console.log(res);
        this.userData = {
          labels: Object.keys(res?.data?.userStatistic),
          datasets: [
             { data: Object.values(res?.data?.userStatistic),
              backgroundColor: ['red', 'green', 'blue']},
            ]
        }
      },
      error: (error) => this.modalService.alert({
        type: error,
        message: error.message
      })
    })
  }

  public getOrderStatistic(){
    const params = {
      from: '',
      to: '',
      type: this.form.controls['type'].value?.value || 'MONTH'
    }
    this.orderService.getOrderStatistic(params).subscribe({
      next: (res) => {
        console.log(res?.data?.map((data: any) => data?.totalOrder));
        this.orderData = {
          labels: ['Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4'],
          datasets: [
             { label: 'Đơn hàng',
              data: res?.data?.map((data: any) => data?.totalOrder),
              backgroundColor: ['green']},
            ]
        }
      },
      error: (error) => this.modalService.alert({
        type: error,
        message: error.message
      })
    })
  }
}
