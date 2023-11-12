import { Component, OnInit } from '@angular/core';
import { ICategoryData } from "src/app/core/interfaces/category.interface";
import { ITitleTable } from "src/app/core/interfaces/table.interface";
import { CategoryService } from "src/app/core/services/category/category.service";
import { ModalCategoriesCreateComponent } from "../modal-categories-create/modal-categories-create.component";
import { Action, ModalSize } from "src/app/core/enums";
import { ModalService } from "src/app/core/services/modal";

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit{

  public titleTable:ITitleTable[] = [
    {
      title: 'Tên danh mục'
    }
  ];
  public dataTable:ICategoryData[] = [];
  public total = 0;
  constructor(
    private categoryService: CategoryService,
    private modalService: ModalService
  ){

  }

  ngOnInit(): void {
    // this.getList();
    this.getAll();
  }

  getAll(){
    this.categoryService.getCategoryAll()
    .subscribe({
      next: resp => {
        this.dataTable = resp.data;
        this.total = this.dataTable?.length
      }
    })
  }
  getList(){
    this.categoryService.searchCategory(
      {
        size: 10,
        page: 1
      }
    ).subscribe({
      next: resp => {
        console.log(resp);
      },
      error: error => {
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

  create(header = 'Tạo mới danh mục', action:Action = Action.Create, item?:ICategoryData){
    this.modalService.open(
      ModalCategoriesCreateComponent,
      {
        header,
        data: {
          type: action,
          item
        }
      }
    ).onClose.subscribe((flag) => {
      if(flag){
        this.getAll();
      }
    })
  }

  view(item:ICategoryData){
    this.create( 'Chi tiết danh mục', Action.Detail, item);
  }

  update(item:ICategoryData){
    this.create( 'Cập nhật danh mục', Action.Update, item);
  }

  delete(item:ICategoryData){
    this.modalService.confirm({
      message: 'Bạn chắc chắn xóa danh mục này?',
      accept: () => {
        this.categoryService.delete(item?.id as number)
        .subscribe({
          next: () => {
            this.modalService.alert(
              {
                type: 'success',
                message: 'Xóa thành công',
              }
            );
            this.refreshData();
          },
          error: error => {
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
    })

  }
  refreshData(){
    this.getAll();
  }

  searchChange(event:any){
    console.log(event);
  }
}
