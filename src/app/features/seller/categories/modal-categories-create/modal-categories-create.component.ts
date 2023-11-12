import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { Subject, takeUntil } from "rxjs";
import { Action } from "src/app/core/enums";
import { ICategoryData } from "src/app/core/interfaces/category.interface";
import { IResponse } from "src/app/core/interfaces/response.interface";
import { CategoryService } from "src/app/core/services/category/category.service";
import { ModalService } from "src/app/core/services/modal";

@Component({
  selector: 'app-modal-categories-create',
  templateUrl: './modal-categories-create.component.html',
  styleUrls: ['./modal-categories-create.component.scss']
})
export class ModalCategoriesCreateComponent implements OnInit, AfterViewInit, OnDestroy{

  private destroy$ = new Subject();

  public form!:FormGroup;
  public action:Action = Action.Create;
  public isView = false;

  constructor(
    private modalRef: DynamicDialogRef,
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private dialogConfig: DynamicDialogConfig,
    private modalService: ModalService,
    private cdRef: ChangeDetectorRef,
  ){

  }

  ngOnInit(): void {
    this.initParams();
    this.initForm();
    this.handleRoute();
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
  }

  initParams(){
    this.action = this.dialogConfig.data?.type;
  }

  initForm(){
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['']
    })
  }


  handleRoute(){
    switch(this.action){
      case Action.Detail:
        this.isView = true;
        this.form.disable();
        this.getDetail();
        break;
      case Action.Update:
        this.isView = false;
        this.getDetail();
        break;
    }
  }


  getDetail(){
    this.categoryService.detail(this.dialogConfig.data?.item?.id)
    .pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (resp:IResponse<ICategoryData>) => {
        this.form.patchValue(resp?.data);
      },
      error: error => {
        this.closeModal();
        this.modalService.alert(
          {
            type: 'error',
            message: error?.error?.message || 'Lỗi hệ thống',
            btnOkName: 'Đóng',
          }
        )
      }
    })
  }

  submit(){
    if(this.form.invalid){
      return;
    }

    if(this.action === Action.Create){
      this.createHanle();
    }else{
      this.updateHandle();
    }


  }

  createHanle(){
    this.categoryService.create(this.form?.value)
    .subscribe(this.handleResponseCreate)
  }

  updateHandle(){
    this.categoryService.update({
      ...this.form?.value,
      id: this.dialogConfig.data?.item?.id
    })
    .subscribe(this.handleResponseCreate)
  }
  closeModal(){
    this.modalRef.close();
  }

  get handleResponseCreate() {
    return {
      next: () => {
        this.modalService.alert(
          {
            type: 'success',
            message: (this.action === Action.Create) ? 'Tạo mới danh mục thành công' : 'Cập nhật danh mục thành công'
          }
        )
        this.modalRef.close(true);
      },
      error: (error:any) => {
        this.modalService.alert(
          {
            type: 'error',
            message: error?.message || 'Lỗi hệ thống'
          }
        )
      }
    }
  }
}
