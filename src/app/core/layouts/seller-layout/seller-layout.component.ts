import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { MenuItem } from "primeng/api";
import { IMenuSidebar } from "../../interfaces/common.interface";
import { ModalService } from "../../services/modal";
import { ModalAccountManagerComponent } from "src/app/features/seller/account/modal-account-manager/modal-account-manager.component";
import { AuthService } from "../../services/auth/auth.service";
import { IRole } from "../../interfaces";
import { Authority, JWTStorageKey } from "../../enums";
import { ActivatedRoute } from "@angular/router";
import { MENU_ADMIN, MENU_SELLER } from "./menu";

@Component({
  selector: "app-seller-layout",
  templateUrl: "./seller-layout.component.html",
  styleUrls: ["./seller-layout.component.scss"],
})
export class SellerLayoutComponent implements OnInit {
  @ViewChild("avatar") avatar!: ElementRef;
  public menus: IMenuSidebar[] = [];
  public items: MenuItem[] = [];
  public roleTitle: "for Seller" | "for Admin" = "for Seller";
  constructor(
    private modalService: ModalService,
    private authService: AuthService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    console.log("role", this.route.snapshot.params["role"]);
    this.checkRole();
    this.items = [
      {
        label: "Quản lý tài khoản",
        icon: "ic-account.svg",
        command: () => {
          this.modalService.open(ModalAccountManagerComponent, {
            header: "Quản lý tài khoản",
          });
        },
      },
      {
        label: "Đăng xuất",
        icon: "ic-logout.svg",
        command: () => {
          this.authService.logout();
        },
      },
    ];
  }

  private checkRole(){
    const role: IRole[] = this.authService.getDataByKey(JWTStorageKey.role);
    this.menus = (role[0]?.authority === Authority.Seller) ? [...MENU_SELLER] : [...MENU_ADMIN];
    this.roleTitle = (role[0]?.authority === Authority.Seller) ? "for Seller" : "for Admin";
  }
}
