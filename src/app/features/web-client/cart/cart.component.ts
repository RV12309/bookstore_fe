import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MenuItem } from "primeng/api";
import { BREADCRUMB_DEFAULT } from "src/app/core/constant/common.constant";
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
  public totalItems: number = 0;
  public breadcrumb:MenuItem[] = [];

  constructor(
    private router: Router,
    private globalService: GlobalService,
    private storeService: StoreService,
    private modalService: ModalService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getCart();
    this.breadcrumb = [
      ...BREADCRUMB_DEFAULT,
      {
        label: "Giỏ hàng",
      }
    ]
  }

  checkout(){
    this.router.navigate(['/checkout'])
  }

  public getCart(){
    let sessionId = '';
    let userId = '';
    if(this.storeService.getSession(StorageKey.accessToken)){
     userId = (this.authService.getDataByKey(JWTStorageKey.account).userId)?.toString();
    }  
    if(this.storeService.getSession(StorageKey.cart)){
      sessionId = this.storeService.getSession(StorageKey.cart)?.toString() || '';
    }
    this.totalItems = 0;
    this.globalService.getCart(sessionId || 0, userId || 0).subscribe({
      next: (res) => {
        this.cart = res.data;
        this.cart.items?.forEach((item: ICartItem) => {
          this.totalItems += item.quantity;
        })
      },
      error: (err) => {
        this.modalService.alert({
          type: 'error',
          message: err.message
        })
      }
    })
  }

  public onChangeQuantity(e: any, item: ICartItem){
      const id = this.storeService.getSession(StorageKey.cart);
      const params = {
        bookId: item.bookId,
        quantity: e,
        sessionId: this.storeService.getSession(StorageKey.cart) || '',
        action: 'UPDATE'
      }
      this.globalService.updateCart(params).subscribe({
        next: () => this.getCart(),
        // next: (res) => {
        //   this.modalService.alert({
        //     type: 'success',
        //     message: 'Thêm sách thành công!'
        //   })
        // },
        error: (error) => {
          this.modalService.alert({
            type: 'error',
            message: error.message
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
        });
        this.getCart();
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

  public deleteProduct(item: ICartItem){
    this.modalService.confirm(
      {
        message: "Bạn chắc chắn xóa sản phẩm khỏi giỏ hàng ?",
        accept: () => {this.removeFromCart(item)}
      }
    )
  }
}
