import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { finalize } from "rxjs";
import { DefaultValue, JWTStorageKey, StorageKey } from "src/app/core/enums";
import { ISelectItem } from "src/app/core/interfaces";
import { IBookData, IBookSearchForm } from "src/app/core/interfaces/books.interface";
import { ICategoryData } from "src/app/core/interfaces/category.interface";
import { GlobalService, StoreService } from "src/app/core/services";
import { AuthService } from "src/app/core/services/auth/auth.service";
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

  public dataBooks: IBookData[] = [];
  public filterData: IBookData[] = [];
  public categories: ICategoryData[] = [];
  public checkedItem: any[] = [];
  public selectedValues: any[] = [];
  public currentParams: IBookSearchForm = {};
  public skeleton = true;

  constructor(
    private fb: FormBuilder,
    private globalService: GlobalService,
    private modalService: ModalService,
    private storageService: StoreService,
    private authService: AuthService)  {}

  ngOnInit(): void {
    this.currentParams = {
      page: 0,
      size: 10
    }
    this.initForm();
    this.getBookList();
    this.getCategoryList();
    this.getCart();
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
    this.globalService.getBooksList(this.currentParams)
    .pipe(
      finalize(() => this.skeleton = false)
    )
    .subscribe({
      next: resp => {
        this.dataBooks = resp.data?.content;
        this.filterData = this.dataBooks;
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
   if(this.selectedValues?.length){
    this.currentParams = {
      ...this.currentParams,
      categoryIds: this.selectedValues
    }
   } else{
    this.currentParams = {
      ...this.currentParams,
      categoryIds: undefined
    }
   }

    this.getBookList();
  }

  filterByRange(){
    this.currentParams = {
      ...this.currentParams,
      priceFrom: this.priceRangeControl.value[0],
      priceTo: this.priceRangeControl.value[1],
    }
    this.getBookList();
  }

  public getCart(){
    let sessionId = '';
    let userId = '';
    if(this.storageService.getSession(StorageKey.accessToken)){
     userId = (this.authService.getDataByKey(JWTStorageKey.account).userId).toString();
    }  
    if(this.storageService.getSession(StorageKey.cart)){
      sessionId = (this.storageService.getSession(StorageKey.cart))?.toString() || '';
    }
    this.globalService.getCart(sessionId || 0, userId || 0).subscribe({
      next: (res) => {
        this.storageService.setSession(StorageKey.cart, res.data.id)
      },
      error: (err) => {
      }
    })
  }
}
