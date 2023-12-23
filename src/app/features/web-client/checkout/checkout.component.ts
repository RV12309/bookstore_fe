import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem } from "primeng/api";
import { BREADCRUMB_DEFAULT } from "src/app/core/constant/common.constant";
import { JWTStorageKey, StorageKey } from 'src/app/core/enums';
import { ICart, ICartItem } from 'src/app/core/interfaces/cart';
import { GlobalService, StoreService } from 'src/app/core/services';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { ModalService } from 'src/app/core/services/modal';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public cart!: ICart;
  public totalItems: number = 0;
  public form!: FormGroup;
  public breadcrumb:MenuItem[] = [];
  public paymentMethodList = [
    {
      value : 'vnpay',
      img: 'https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-VNPAY-QR.png',
      label: 'Ví VNPAY'
    },
    {
      value : 'bank',
      img: 'https://thebankz.com/wp-content/uploads/2023/05/logo-ngan-hang-vietcombank-moi.jpg',
      label: 'Ngân hàng nội địa'
    }
  ];
  
  constructor(
    private router: Router,
    private globalService: GlobalService,
    private storeService: StoreService,
    private modalService: ModalService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.breadcrumb = [
      ...BREADCRUMB_DEFAULT,
      {
        label: "Giỏ hàng",
        routerLink: '/cart'
      },
      {
        label: "Thanh toán",
      }
    ]
    this.initForm();
    this.getCustomerInfo();
    this.getCart();
  }

  public initForm(){
    this.form = this.formBuilder.group({
      name: [],
      address: [],
      phone: [],
      paymentProvider: ['vnpay'],
      email: [],
      specificAddr: []
    })
  }

  public placeOrder(){
    const{ name, phone, email, address, paymentProvider, specificAddr} = this.form.value;
    const params = {
      sessionId: (this.storeService.getSession(StorageKey.cart))?.toString() || 0,
      email: email,
      phone: phone,
      name: name,
      paymentProvider: 'COD',
      total: this.cart.total,
      provinceId: address?.province?.code,
      districtId: address?.district?.code,
      wardCode: address?.ward?.code,
      province: address?.province?.name,
      district: address?.district?.name,
      ward: address?.ward?.name,
      firstAddress: specificAddr
    };
    console.log(params);
    this.globalService.initOrder(params).subscribe({
      next: () => {this.modalService.alert({
        type: 'success',
        message: 'Mua hàng thành công'
      })},
      error: (err) => {
        this.modalService.alert({
          type: 'error',
          message: err.message
        })
      }
    })
  }

  public onChangeAddress(e: any){
    this.form.controls['address'].patchValue(e);
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
    this.globalService.getCart(sessionId || 0, userId || 0).subscribe({
      next: (res) => {
        this.cart = res.data;
        this.cart.items?.forEach((item: ICartItem) => {
          this.totalItems += item.quantity;
        })
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

  public getCustomerInfo(){
    if(this.storeService.getSession(StorageKey.accessToken)) {
    this.userService.getCustomerInfo().subscribe({
      next: res => {
        console.log(res);
        this.form.patchValue(res.data);
      },
      error: err => this.modalService.alert({
        type: 'error',
        message: err.message
      })
    })}
    else return
  }

  public back(){
    this.router.navigate(['/cart']);
  }
}
