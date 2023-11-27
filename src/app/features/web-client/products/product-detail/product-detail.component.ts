import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MenuItem } from "primeng/api";
import { BREADCRUMB_DEFAULT } from "src/app/core/constant/common.constant";
import { AspectRatio, RoundedCSS } from "src/app/core/enums";
import { IBookData } from "src/app/core/interfaces/books.interface";
import { IResponse } from "src/app/core/interfaces/response.interface";
import { GlobalService } from "src/app/core/services";

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

  constructor(
    private globalService: GlobalService,
    private route: ActivatedRoute
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

}
