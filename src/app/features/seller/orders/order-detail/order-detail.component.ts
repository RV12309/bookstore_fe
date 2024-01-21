import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BehaviorSubject, EMPTY, Observable, catchError, map, mergeMap, tap } from 'rxjs';
import { GlobalService } from 'src/app/core/services';
import { ModalService } from 'src/app/core/services/modal';
import { OrdersService } from 'src/app/core/services/orders/orders.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit {
  public form!: FormGroup;
  public breadcrumb: MenuItem[] = [];
  public tracking$: Observable<any> = new Observable<any>();
  public trackingSub$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public data: any;
  public label = '';
  public status = '';

  constructor(
    private formBuilder: FormBuilder,
    private globalService: GlobalService,
    private modalService: ModalService,
    private router: Router,
    private orderService: OrdersService
  ) {
    this.data = this.router.getCurrentNavigation()?.extras?.state;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      orderId: [{ value: this.data?.id, disabled: true }],
    });
    if (this.data) {
      this.submit();
    }
  }

  public submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
    this.tracking$ = this.trackingSub$.pipe(
      mergeMap(() => this.globalService
      .getOrderDetail(this.form.value.orderId)
      .pipe()),
        map((res) => res?.data),
        tap((res) => {
          switch (res.status) {
            case 'PENDING':
              this.label = 'Xác nhận';
              this.status = 'PROCESSING';
              break;
            case 'PROCESSING':
              this.label = 'Đang ship';
              this.status = 'SHIPPING';
              break;
            case 'SHIPPING':
              this.label = 'Hoàn thành';
              this.status = 'COMPLETED';
              break;
            case 'COMPLETED':
              this.label = '';
              this.status = '';
              break;
          }
        }),
        catchError((err: any) => {
          this.modalService.alert({
            type: 'error',
            message: err.message,
          });
          return EMPTY;
        }
      ))
    // this.globalService
    //   .getOrderDetail(this.form.value.orderId)
    //   .pipe(
    //     map((res) => res?.data),
    //     tap((res) => {
    //       switch (res.status) {
    //         case 'PENDING':
    //           this.label = 'Xác nhận';
    //           this.status = 'PROCESSING';
    //           break;
    //         case 'PROCESSING':
    //           this.label = 'Đang ship';
    //           this.status = 'SHIPPING';
    //           break;
    //         case 'SHIPPING':
    //           this.label = 'Hoàn thành';
    //           this.status = 'COMPLETED';
    //           break;
    //         case 'COMPLETED':
    //           this.label = '';
    //           this.status = '';
    //           break;
    //       }
    //     }),
    //     catchError((err: any) => {
    //       this.modalService.alert({
    //         type: 'error',
    //         message: err.message,
    //       });
    //       return EMPTY;
    //     })
    //   );
  }

  public updateOrderStatus() {
    const params = {
      status: this.status,
      note: '',
    };
    this.orderService.updateOrderStatus(this.data.id, params).subscribe({
      next: (res) => this.trackingSub$.next({}),
      error: (err) =>
        this.modalService.alert({ type: 'error', message: err.message }),
    });
  }
}
