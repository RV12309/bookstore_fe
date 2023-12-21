import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MenuItem } from "primeng/api";
import { BREADCRUMB_DEFAULT } from "src/app/core/constant/common.constant";
import { AspectRatio, RoundedCSS, StorageKey } from "src/app/core/enums";
import { IBookData } from "src/app/core/interfaces/books.interface";
import { IResponse } from "src/app/core/interfaces/response.interface";
import { GlobalService, StoreService } from "src/app/core/services";
import { ModalService } from 'src/app/core/services/modal';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public dataBook!:IBookData;
  public AspectRatio = AspectRatio;
  public RoundedCSS = RoundedCSS;
  public breadcrumb:MenuItem[] = [];
  public tabIndex = 0;
  public tabInfo = [
    {
      label: 'Chi tiết sản phẩm'
    },
    {
      label: 'Ý kiến khách hàng'
    }
  ]

  private isbn:string = '';
  public quantity = 0;

  constructor(
    private globalService: GlobalService,
    private route: ActivatedRoute,
    private modalService: ModalService,
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.isbn = this.route.snapshot.params['isbn'];
    this.getBookDetail();
  }

  getBookDetail(){
    this.globalService.getBooksDetail(this.isbn)
    .subscribe({
      next: (resp:IResponse<IBookData>) => {
        this.dataBook = resp?.data;
        this.breadcrumb = [
          ...BREADCRUMB_DEFAULT,
          {
            label: "Danh sách",
            routerLink: '/products'
          },
          {
            label: this.dataBook?.title,
          }
        ]
      }
    })
  }

  chooseTab(index:number){
    this.tabIndex = index;
  }

  addCart(){
    const id = this.storeService.getSession(StorageKey.cart);
    const params = {
      bookId: this.dataBook.id,
      quantity: this.quantity,
      sessionId: id || '',
      action: 'ADD'
    }
    this.globalService.updateCart(params).subscribe({
      next: (res) => {
        this.modalService.alert({
          type: 'success',
          message: 'Thêm sách thành công!'
        })
      },
      error: (error) => {
        this.modalService.alert({
          type: 'error',
          message: error.message
        })
      }
    })
  }

  public onChangeQuantity(e: number){
    this.quantity = e;
  }

}
