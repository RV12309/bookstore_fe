import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";
import { BREADCRUMB_DEFAULT } from "src/app/core/constant/common.constant";
import { IMenuSidebar } from "src/app/core/interfaces";

@Component({
  selector: 'app-profile-layout',
  templateUrl: './profile-layout.component.html',
  styleUrls: ['./profile-layout.component.scss']
})
export class ProfileLayoutComponent implements OnInit {

  public breadcrumb:MenuItem[] = [];
  public menus:IMenuSidebar[] = [
    {
      icon: '/default/ic-user-01.svg',
      label: 'Tài khoản của tôi',
      route: '',
      children: [
        {
          // icon: 'ic-books-list.svg',
          title: 'Hồ sơ',
          key: '',
          // route: '/seller/books'
        },
        {
          // icon: 'ic-category.svg',
          title: 'Địa chỉ',
          key: '',
          // route: '/seller/books/categories'
        }
      ]
    },
    {
      icon: '/default/ic-document-text.svg',
      label: 'Đơn mua',
      route: '',
      // children: [
      //   {
      //     icon: 'ic-order.svg',
      //     title: 'Danh sách đơn hàng',
      //     key: '',
      //     route: '/seller/order'
      //   }
      // ]
    },
    {
      icon: '/default/ic-ticket.svg',
      label: 'Kho voucher',
      route: '',
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

  constructor() { }

  ngOnInit(): void {
    this.breadcrumb = [
      ...BREADCRUMB_DEFAULT,
      {
        label: "Quản lý tài khoản",
      }
    ]
  }

}
