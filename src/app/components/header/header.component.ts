import {
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Menu } from "primeng/menu";
import { BRANCH_NAME } from "src/app/core/constant/common.constant";
import { ModalSize, StorageKey } from "src/app/core/enums";
import { StoreService } from "src/app/core/services";
import { AuthService } from "src/app/core/services/auth/auth.service";
import { ModalService } from "src/app/core/services/modal";
import { ModalProfileComponent } from "src/app/features/web-client/profile/modal-profile/modal-profile.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @ViewChild("menuUser", { static: false }) menuUser!: Menu;
  public BRANCH_NAME = BRANCH_NAME;
  public items = [
    {
      label: "Thông tin cá nhân",
      command: () => {
        this.modalService.open(ModalProfileComponent, {
          header: "Thông tin cá nhân",
          width: ModalSize.Large
        });
      },
    },
    {
      label: "Đăng xuất",
      command: () => {
        this.authService.logout();
      },
    },
  ];

  users = [
    {
      label: "Đăng nhập",
      command: () => {
        this.router.navigate(['/auth/login'])
      },
    },
    {
      label: "Đăng ký",
      command: () => {
        this.router.navigate(['/auth/register'])
      },
    },
  ];
  public isLogin = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private modalService: ModalService,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    const accessToken = this.storeService.getSession(StorageKey.accessToken);
    this.isLogin = !!accessToken
  }

  public menu = [
    {
      label: "Sản phẩm",
      // icon: "pi pi-book",
      command: () => {
        this.router.navigate(["/products"]);
      },
    },
  ];

  cart(){
    this.router.navigate(["/cart"]);
  }

}
