import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem } from "primeng/api";
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { BREADCRUMB_DEFAULT } from "src/app/core/constant/common.constant";
import { GlobalService } from 'src/app/core/services';
import { ModalService } from 'src/app/core/services/modal';

@Component({
  selector: 'app-tracing',
  templateUrl: './tracing.component.html',
  styleUrls: ['./tracing.component.scss']
})
export class TracingComponent implements OnInit {

  public form!: FormGroup;
  public breadcrumb:MenuItem[] = [];
  public tracking$: Observable<any> = new Observable<any>;
  public orderId: any;


  constructor(
    private formBuilder: FormBuilder,
    private globalService: GlobalService,
    private modalService: ModalService,
    private router: Router
  ) { 
    this.orderId = this.router.getCurrentNavigation()?.extras?.state;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      orderId: [this.orderId, Validators.required]
    });
    this.breadcrumb = [
      ...BREADCRUMB_DEFAULT,
      {
        label: "Tra cứu đơn hàng",
      }
    ]
    if(this.orderId){
      this.submit();
    }
  }

  public submit(){
    this.form.markAllAsTouched();
    if(this.form.invalid){
      return
    }
    this.tracking$ = this.globalService.getOrderDetail(this.form.value.orderId).pipe(
      map(res => res?.data),
      catchError((err: any) => {
        this.modalService.alert({
          type: 'error',
          message: err.message
        });
        return EMPTY
      })
    )
    // .subscribe({
    //   next: (res) => console.log(res),
    //   error: (error) => this.modalService.alert({
    //     type: 'error',
    //     message: error?.message
    //   })
    // }
  }
}
