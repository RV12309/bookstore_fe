import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from "primeng/api";
import { BREADCRUMB_DEFAULT } from "src/app/core/constant/common.constant";
import { JWTStorageKey, StorageKey } from 'src/app/core/enums';
import { IMenuSidebar } from "src/app/core/interfaces";
import { StoreService } from 'src/app/core/services';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-profile-layout',
  templateUrl: './profile-layout.component.html',
  styleUrls: ['./profile-layout.component.scss']
})
export class ProfileLayoutComponent implements OnInit {

  public username: string | any;
  public breadcrumb:MenuItem[] = [];
  public menus:IMenuSidebar[] = [
    {
      icon: '/default/ic-user-01.svg',
      label: 'Tài khoản của tôi',
      route: '/profile',
    },
    {
      icon: '/default/ic-document-text.svg',
      label: 'Đơn mua',
      route: '/profile/orders',
    },
    {
      icon: '/default/ic-ticket.svg',
      label: 'Kho voucher',
      route: '/profile',
      // children: [
      //   {
      //     icon: 'ic-statistics.svg',
      //     title: 'Số lượng bán',
      //     key: '',
      //     route: '/seller/statistics'
      //   }
      // ]
    }
  ]

  constructor(
    private router: Router,
    private storeService: StoreService,
    private authService: AuthService
  ) {
    if(this.storeService.getSession(StorageKey.accessToken)){
      this.username = this.authService.getDataByKey(JWTStorageKey.username)?.toString();
     } 
   }

  ngOnInit(): void {
    this.breadcrumb = [
      ...BREADCRUMB_DEFAULT,
      {
        label: "Quản lý tài khoản",
      }
    ]
  }

  public redirect(route: string | any){
    this.router.navigate([route]);
  }

}
