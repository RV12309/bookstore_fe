import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/core/services';
import { ModalService } from 'src/app/core/services/modal';

@Component({
  selector: 'app-tracing',
  templateUrl: './tracing.component.html',
  styleUrls: ['./tracing.component.scss']
})
export class TracingComponent implements OnInit {

  public form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private globalService: GlobalService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      orderId: ['', Validators.required]
    })
  }

  public submit(){
    this.form.markAllAsTouched();
    if(this.form.invalid){
      return
    }
    this.globalService.getOrderDetail(this.form.value.orderId).subscribe({
      next: (res) => console.log(res),
      error: (error) => this.modalService.alert({
        type: 'error',
        message: error?.message
      })
    }
    )
  }
}