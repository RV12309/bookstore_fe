import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { StorageKey } from "src/app/core/enums";
import { IMenuSidebar } from "src/app/core/interfaces";
import { StoreService } from "src/app/core/services";
import { AuthService } from "src/app/core/services/auth/auth.service";
import { ModalService } from "src/app/core/services/modal";

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

  @ViewChild('website') website!:ElementRef;
  @Input() menuList!:IMenuSidebar[];
  @Input() roleTitle: "for Seller" | 'for Admin' = "for Seller";

  public isExpand = true;

  constructor(
    private storeService:StoreService,
    private modalService: ModalService,
    private router:Router,
    private authService: AuthService
  ){
  }

  ngOnInit(): void {
    this.isExpand = !this.storeService.getSession(StorageKey.isExpand)
  }

  expand(){
    this.isExpand =  !this.isExpand;
    this.storeService.setSession(StorageKey.isExpand, (this.isExpand)?'':'false')
  }

  logout(){
    this.authService.logout();
  }

}
