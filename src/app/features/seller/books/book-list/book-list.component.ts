import { Component, OnInit } from '@angular/core';
import { BooksService } from "src/app/core/services/books/books.service";
import { ModalService } from 'src/app/core/services/modal';
import { BookCreateComponent } from "../book-create/book-create.component";
import { ModalSize } from "src/app/core/enums";
import { CategoryService } from "src/app/core/services/category/category.service";
import { DropdownService } from "src/app/core/services/dropdown.service";
import { ISelectItem } from "src/app/core/interfaces/common.interface";
import { ICategoryData } from "src/app/core/interfaces/category.interface";
import { IFilterItem, InputType } from "src/app/core/interfaces";
import { ITitleTable } from "src/app/core/interfaces/table.interface";
import { ActivatedRoute } from "@angular/router";
import { GlobalService } from "src/app/core/services";
import { BehaviorSubject, EMPTY, Observable, catchError, mergeMap, tap } from 'rxjs';
import { IBookData, IBookSearchForm } from 'src/app/core/interfaces/books.interface';
import { IResponse } from 'src/app/core/interfaces/response.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit{

  public categoriesOriginal:ICategoryData[] = [];
  public categories:ISelectItem[] = [];
  public filterKeys:IFilterItem<any>[] = [
    {
      type: InputType.Input,
      controlName: 'title',
      label: 'Tên sách',
      icon: 'assets/icons/default/ic-search.svg',
      placeholder: 'Nhập tên sách',
      // defaultValue: 'harry'
    },
    {
      type: InputType.Input,
      controlName: 'author',
      label: 'Tên tác giả',
      icon: 'assets/icons/default/ic-search.svg',
      placeholder: 'Nhập tên tác giả',
      // defaultValue: 'Quang Duy'
    },
    {
      type: InputType.Select,
      controlName: 'categoryId',
      label: 'Danh mục',
      icon: 'assets/icons/default/ic-archive.svg',
      dataList: this.categories,
      defaultValue: this.categories[0],
      placeholder: 'Chọn danh mục',
    },
    {
      type: InputType.DatePicker,
      controlName: 'createdDate',
      label: 'Ngày tạo',
      icon: 'assets/icons/default/ic-archive.svg',
      placeholder: 'Chọn ngày tạo'
    },
    {
      type: InputType.InputNumber,
      controlName: 'priceFrom',
      label: 'Giá tối thiểu',
      icon: 'assets/icons/default/ic-search.svg',
      placeholder: 'Nhập giá tối thiểu',
      suffix: ' VNĐ'
    },
    {
      type: InputType.InputNumber,
      controlName: 'priceTo',
      label: 'Giá tối đa',
      icon: 'assets/icons/default/ic-search.svg',
      placeholder: 'Nhập giá tối đa',
      suffix: ' VNĐ'
    },

  ];

  public titleTable:ITitleTable[] = [
    {
      title: 'Tiêu đề'
    },
    {
      title: 'Tác giả'
    },
    {
      title: 'Giá'
    },
    {
      title: 'Số lượng'
    },
    {
      title: 'Số trang'
    }
  ]

  public bookList$: Observable<any> = new Observable<any>();
  public bookSub$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public dataTable: IBookData[] = [];
  public total!: number;

  constructor(
    private modalService: ModalService,
    private booksService: BooksService,
    private categoryService: CategoryService,
    private dropdownService: DropdownService,
    private route: ActivatedRoute,
    private globalService: GlobalService
  ){

  }

  ngOnInit(): void {
    this.changeParams()
    this.getCategoryList();
    // this.getBookList();
  }

  public getBookList(){
    this.bookList$ = this.bookSub$.pipe(
      mergeMap((params: IBookSearchForm) => 
        this.globalService.getBooksList(params).pipe(
          tap((res: IResponse<any>) => {
            return res?.data?.content
          }),
          catchError((error: IResponse<any>) => {
            this.modalService.alert({
              type: 'error',
               message: error.message });
            return EMPTY;
          })
        )
      )
    )
  }

  changeParams(){
  this.route.queryParams
  .subscribe(
    params => {
      console.log(params);
      this.getListFromParams(params)
    }
  )
  }

  getListFromParams(params:any){
    this.globalService.getBooksList(params).subscribe({
      next: resp => {
        this.dataTable = resp?.data?.content;
        this.total = this.dataTable?.length;
        console.log(this.dataTable)
      },

    })
  }

  refreshData(){
    this.changeParams();
  }

  getCategoryList(){
    this.categoryService.getCategoryAll()
    .subscribe({
      next: resp => {
        this.categories = this.dropdownService.renderList(
          resp?.data,
          'name',
          'id',
          'id',
        );
        const filterAfterRerender = this.dropdownService.rerenderList(
          this.filterKeys,
          this.categories,
          'categoryId'
        );
        this.filterKeys = [...filterAfterRerender];
        // this.filterKeys = this.dropdownService.changePropertyList(
        //   this.filterKeys,
        //   this.categories[2],
        //   'defaultValue',
        //   'categoryId'
        // )
      }
    })
    console.log(this.filterKeys)
  }

  create(){
    this.modalService.open(
      BookCreateComponent,
      {
        header: 'Tạo mới sách',
        width: ModalSize.Large
      }
    )
    // this.modalService.alert(
    //   {
    //     message: 'Bạn xác nhận tạo sách ?',
    //     accept: () => {
    //       console.log('Đã accept')
    //     }
    //   }
    // )
  }
}
