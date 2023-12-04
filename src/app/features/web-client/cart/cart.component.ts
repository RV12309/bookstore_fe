import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { JWTStorageKey, StorageKey } from 'src/app/core/enums';
import { ICart, ICartItem } from 'src/app/core/interfaces/cart';
import { ITitleTable } from "src/app/core/interfaces/table.interface";
import { GlobalService, StoreService } from 'src/app/core/services';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { ModalService } from 'src/app/core/services/modal';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cart!: ICart;
  public dataTable = [1,2,3,4];
  public titleTable: ITitleTable[] = [
    {
      title: 'Ảnh sản phẩm',
    },
    {
      title: 'Tên sản phẩm',
    },
    {
      title: 'Số lượng',
    },
    {
      title: 'Thành tiền',
    }
  ]

  constructor(
    private router: Router,
    private globalService: GlobalService,
    private storeService: StoreService,
    private modalService: ModalService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getCart();
  }

  checkout(){
    this.router.navigate(['/checkout'])
  }

  public getCart(){
    let sessionId = 0;
    let userId = 0;
    if(this.authService.getDataByKey(JWTStorageKey.account)){
     userId = Number(this.authService.getDataByKey(JWTStorageKey.account).userId);
    }  
    if(this.storeService.getSession(StorageKey.cart)){
      sessionId = Number(this.storeService.getSession(StorageKey.cart));
    }
    this.globalService.getCart(sessionId, userId).subscribe({
      next: (res) => {
        this.cart = res.data;
        console.log(this.cart);
      },
      error: (err) => {
        this.modalService.alert({
          type: 'error',
          message: err.message
        })

      }
    })
  }

  public removeFromCart(item: ICartItem){
    const params = {
      sessionId: this.storeService.getSession(StorageKey.cart) || '',
      bookId: item.bookId,
      quantity: item.quantity,
      action: 'REMOVE'
    }
    this.globalService.updateCart(params).subscribe({
      next: (res) => {
        this.modalService.alert({
          type: 'success',
          message: 'Xóa sách thành công!'
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

  public shopping(){
    this.router.navigate(['/products'])
  }

  public deleteProduct(item:any){
    this.modalService.confirm(
      {
        message: "Bạn chắc chắn xóa sản phẩm khỏi giỏ hàng ?"
      }
    )
  }
}
