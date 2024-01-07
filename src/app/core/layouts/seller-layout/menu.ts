import { IMenuSidebar } from "../../interfaces";

export const MENU_SELLER: IMenuSidebar[] = [
  {
    icon: "",
    label: "Quản lý sách",
    route: "",
    children: [
      {
        icon: "ic-books-list.svg",
        title: "Danh sách sách",
        key: "",
        route: "/seller/books",
      },
      {
        icon: "ic-category.svg",
        title: "Danh mục",
        key: "",
        route: "/seller/books/categories",
      },
    ],
  },
  {
    icon: "",
    label: "Quản lý đơn hàng",
    route: "",
    children: [
      {
        icon: "ic-order.svg",
        title: "Danh sách đơn hàng",
        key: "",
        route: "/seller/order",
      },
    ],
  },
  {
    icon: "",
    label: "Thống kê",
    route: "",
    children: [
      {
        icon: "ic-statistics.svg",
        title: "Số lượng bán",
        key: "",
        route: "/seller/statistics",
      },
    ],
  },
];

export const MENU_ADMIN: IMenuSidebar[] = [
  {
    icon: "",
    label: "Quản lý người dùng",
    route: "",
    children: [
      {
        icon: "ic-user-01.svg",
        title: "Quản lý người bán",
        key: "",
        route: "/management/sellers",
      },
      {
        icon: "ic-user-01.svg",
        title: "Quản lý người mua",
        key: "",
        route: "/management/customers",
      },
    ],
  },
  {
    icon: "",
    label: "Thống kê",
    route: "",
    children: [
      {
        icon: "ic-statistics.svg",
        title: "Số lượng bán",
        key: "",
        route: "/seller/statistics",
      },
      {
        icon: "ic-statistics.svg",
        title: "Doanh số bán",
        key: "",
        route: "/seller/statistics",
      },
    ],
  },
];