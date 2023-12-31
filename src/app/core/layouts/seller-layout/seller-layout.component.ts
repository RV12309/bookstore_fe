import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from "primeng/api";
import { IMenuSidebar } from "../../interfaces/common.interface";
import { ModalService } from "../../services/modal";
import { ModalAccountManagerComponent } from "src/app/features/seller/account/modal-account-manager/modal-account-manager.component";
import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: 'app-seller-layout',
  templateUrl: './seller-layout.component.html',
  styleUrls: ['./seller-layout.component.scss']
})
export class SellerLayoutComponent implements OnInit {
  @ViewChild('avatar') avatar!:ElementRef;

  public menus:IMenuSidebar[] = [
    {
      icon: '',
      label: 'Quản lý sách',
      route: '',
      children: [
        {
          icon: 'ic-books-list.svg',
          title: 'Danh sách',
          key: '',
          route: '/seller/books'
        },
        {
          icon: 'ic-category.svg',
          title: 'Danh mục',
          key: '',
          route: '/seller/books/categories'
        }
      ]
    },
    {
      icon: '',
      label: 'Quản lý đơn hàng',
      route: '',
      children: [
        {
          icon: 'ic-order.svg',
          title: 'Danh sách',
          key: '',
          route: '/seller/order'
        }
      ]
    },
    {
      icon: '',
      label: 'Thống kê',
      route: '',
      children: [
        {
          icon: 'ic-statistics.svg',
          title: 'Số lượng bán',
          key: '',
          route: '/seller/statistics'
        }
      ]
    }
  ]

  public items: MenuItem[] = [];
  constructor(
    private modalService: ModalService,
    private authService: AuthService
  ){

  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Quản lý tài khoản',
        icon: 'ic-account.svg',
        command: () => {
          this.modalService.open(
            ModalAccountManagerComponent,
            {
              header: "Quản lý tài khoản"
            }
          )
        }
    },
    {
        label: 'Đăng xuất',
        icon: 'ic-logout.svg',
        command: () => {
          this.authService.logout();
        }
    }
  ];
  }
}
