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
      defaultValue: 'harry'
    },
    {
      type: InputType.Input,
      controlName: 'author',
      label: 'Tên tác giả',
      icon: 'assets/icons/default/ic-search.svg',
      placeholder: 'Nhập tên tác giả',
      defaultValue: 'Quang Duy'
    },
    {
      type: InputType.Select,
      controlName: 'categoryId',
      label: 'Danh mục',
      icon: 'assets/icons/default/ic-archive.svg',
      dataList: this.categories,
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
      defaultValue: '1000',
      suffix: ' VNĐ'
    },
    {
      type: InputType.InputNumber,
      controlName: 'priceTo',
      label: 'Giá tối đa',
      icon: 'assets/icons/default/ic-search.svg',
      placeholder: 'Nhập giá tối đa',
      defaultValue: '1000',
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
  constructor(
    private modalService: ModalService,
    private booksService: BooksService,
    private categoryService: CategoryService,
    private dropdownService: DropdownService
  ){

  }

  ngOnInit(): void {
    // this.changeParams()
    this.getCategoryList();
  }

  changeParams(){
    this.booksService.getBooksList(
      {
        page: 0,
        size: 10
      }
    ).subscribe()
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
        this.filterKeys = this.dropdownService.changePropertyList(
          this.filterKeys,
          this.categories[2],
          'defaultValue',
          'categoryId'
        )
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
