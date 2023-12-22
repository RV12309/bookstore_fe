import { Component, OnInit } from '@angular/core';
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
      title: 'Sản phẩm'
    },
    {
      title: 'Thành tiền'
    },
  ];
  public dataTable: IOrder[] = [];
  public total = 0;
  constructor(
    private orderService: OrdersService,
    private modalService: ModalService
  ){

  }

  ngOnInit(): void {
    // this.getList();
    this.getAll();
  }

  getAll(){
    this.orderService.getOrderList({
      size: 10,
      page: 1
    })
    .subscribe({
      next: resp => {
        this.dataTable = resp.data;
        this.total = this.dataTable?.length
      }
    })
  }
  // getList(){
  //   this.categoryService.searchCategory(
  //     {
  //       size: 10,
  //       page: 1
  //     }
  //   ).subscribe({
  //     next: resp => {
  //       console.log(resp);
  //     },
  //     error: error => {
  //       this.modalService.alert(
  //         {
  //           type: 'error',
  //           message: error?.error?.message || 'Lỗi hệ thống',
  //           btnOkName: 'Đóng',
  //         }
  //       )
  //     }
  //   })
  // }


  view(item:ICategoryData){
    console.log('view')
  }

  update(item:ICategoryData){
    console.log('update')
  }
  refreshData(){
    this.getAll();
  }
}
