import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategoryData } from 'src/app/core/interfaces/category.interface';
import { IOrder } from 'src/app/core/interfaces/order.interface';
import { ITitleTable } from 'src/app/core/interfaces/table.interface';
import { ModalService } from 'src/app/core/services/modal';
import { OrdersService } from 'src/app/core/services/orders/orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  public titleTable: ITitleTable[] = [
    {
      title: 'Mã order'
    },
    {
      title: 'Thành tiền'
    },
  ];
  public dataTable: any;
  public total = 0;
  constructor(
    private orderService: OrdersService,
    private modalService: ModalService,
    private router: Router
  ){

  }

  ngOnInit(): void {
    // this.getList();
    this.getAll();
  }

  getAll(){
    this.orderService.getOrderList({
      size: 10,
      page: 0
    })
    .subscribe({
      next: resp => {
        this.dataTable = resp.data?.content;
        this.total = resp?.data?.totalElements
      },
      error: err => {
        this.modalService.alert({
          type: 'error',
          message: err?.message
        })
      }
    })
  }

  view(item: any){
    this.router.navigate(['/tracing'], {state: item.orderId})
  }

  cancel(item: any){
    console.log('incoming');
  }
  
  refreshData(){
    this.getAll();
  }
}
