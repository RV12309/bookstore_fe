import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { DefaultValue } from "src/app/core/enums";
import { ISelectItem } from "src/app/core/interfaces";
import { IBookData } from "src/app/core/interfaces/books.interface";
import { ICategoryData } from "src/app/core/interfaces/category.interface";
import { GlobalService } from "src/app/core/services";
import { ModalService } from "src/app/core/services/modal";

@Component({
  selector: "app-products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.scss"],
})
export class ProductsListComponent implements OnInit {
  public productsForm!: FormGroup;
  public DefaultValue = DefaultValue;
  public sortList: ISelectItem[] = [
    {
      name: "Giá: Thấp đến cao",
      code: "",
      value: "",
    },
    {
      name: "Giá: Cao đến thấp",
      code: "",
      value: "",
    },
  ];

  public dataBooks:IBookData[] = [];
  public categories: ICategoryData[] = [];
  public checkedItem: any[] = [];
  public selectedValues: any[] = [];
  constructor(
    private fb: FormBuilder, 
    private globalService: GlobalService,
    private modalService: ModalService)  {}

  ngOnInit(): void {
    this.initForm();
    this.getBookList();
    this.getCategoryList();
  }

  initForm() {
    this.productsForm = this.fb.group({
      priceRange: [[DefaultValue.MinPrice, DefaultValue.MaxPrice]],
    });
    this.productsForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }
  getBookList(params?: any) {
    const param = {
      page: 0,
      size: 12,
      ...params
    }
    this.globalService.getBooksList(param).subscribe({
      next: resp => {
        this.dataBooks = resp.data?.content;
      }
    });
  }

  get priceRangeControl(): FormControl {
    return this.productsForm.get("priceRange") as FormControl;
  }

  getCategoryList(){
    this.globalService.getCategoryAll().subscribe({
      next: res => {
        this.categories = res?.data;
      },
      error: err => {
        this.modalService.alert({
          type: 'error',
          message: err.message
        })
      }
    })
  }

  onCheckedItem(e: any){
    console.log(this.selectedValues);
    this.getBookList({categoryIds: this.selectedValues});
  }

  onRangeChange(e: any){
    console.log(e);
  }
}
