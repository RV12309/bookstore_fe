import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { DefaultValue } from "src/app/core/enums";
import { ISelectItem } from "src/app/core/interfaces";
import { IBookData, IBookSearchForm } from "src/app/core/interfaces/books.interface";
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
  public currentParams: IBookSearchForm = {};
  constructor(
    private fb: FormBuilder, 
    private globalService: GlobalService,
    private modalService: ModalService)  {}

  ngOnInit(): void {
    this.currentParams = {
      page: 0,
      size: 10
    }
    this.initForm();
    this.getBookList();
    this.getCategoryList();
  }

  initForm() {
    this.productsForm = this.fb.group({
      priceRange: [[DefaultValue.MinPrice, DefaultValue.MaxPrice]],
    });
    // this.productsForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });
  }
  getBookList() {
    this.globalService.getBooksList(this.currentParams).subscribe({
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

  onCheckedItem(){
    console.log(this.selectedValues);
    this.currentParams = {
      ...this.currentParams,
      categoryIds: this.selectedValues
    }
    this.getBookList();
  }

  filterByRange(){
    this.currentParams = {
      ...this.currentParams,
      priceFrom: this.priceRangeControl.value[0],
      priceTo: this.priceRangeControl.value[1],
    }
    console.log(this.currentParams);
    this.getBookList();
  }
}
