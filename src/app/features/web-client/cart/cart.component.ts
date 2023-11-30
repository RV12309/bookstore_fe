import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { StorageKey } from 'src/app/core/enums';
import { ICart, ICartItem } from 'src/app/core/interfaces/cart';
import { GlobalService, StoreService } from 'src/app/core/services';
import { ModalService } from 'src/app/core/services/modal';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cart!: ICart;
  constructor(
    private router: Router,
    private globalService: GlobalService,
    private storeService: StoreService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.getCart();
  }

  checkout(){
    this.router.navigate(['/checkout'])
  }

  public getCart(){
    const id = this.storeService.getSession(StorageKey.cart);
    this.globalService.getCart(id || 0).subscribe({
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
        console.log(res)
      },
      error: (error) => {
        this.modalService.alert({
          type: 'error',
          message: error.message
        })
      }
    })
  }
}
