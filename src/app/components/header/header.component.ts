import {
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Menu } from "primeng/menu";
import { StorageKey } from "src/app/core/enums";
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

  items = [
    {
      label: "Thông tin cá nhân",
      command: () => {
        this.modalService.open(ModalProfileComponent, {
          header: "Thông tin cá nhân",
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
      label: "Thư viện",
      icon: "pi pi-book",
      command: () => {
        this.router.navigate(["/products"]);
      },
    },
  ];

  navigateUser() {
    return;
    const token = sessionStorage.getItem("token");
    if (token) {
      this.router.navigate(["/"]);
      sessionStorage.removeItem("userData");
    } else {
      this.router.navigate(["/auth/login"]);
    }
  }
}
