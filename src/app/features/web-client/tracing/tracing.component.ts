import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(
    private formBuilder: FormBuilder,
    private globalService: GlobalService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      orderId: ['', Validators.required]
    });
    this.breadcrumb = [
      ...BREADCRUMB_DEFAULT,
      {
        label: "Tra cứu đơn hàng",
      }
    ]
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
