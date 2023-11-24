import { Component, ComponentRef, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from "primeng/menu";
import { BRANCH_NAME } from "src/app/core/constant/common.constant";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('menuUser') menuUser!:  Menu;
  public BRANCH_NAME = BRANCH_NAME;
  constructor(
      private router: Router,
      private route: ActivatedRoute
  ){
  }

  items = [
    {
      label: 'Update',
      icon: 'pi pi-refresh',
      command: () => {
      }
  },
  {
      label: 'Delete',
      icon: 'pi pi-times',
      command: () => {
      }
  }
  ];

  public menu = [
    {
      label: 'Thư viện',
      icon: 'pi pi-book',
      command: () => {
        this.router.navigate(['/products'])
      }
  },
  ];

  navigateUser(){
    this.menuUser.toggle(true);
    return;
      const token = sessionStorage.getItem('token');
      if(token){
          this.router.navigate(['/']);
          sessionStorage.removeItem('userData');
      } else {
          this.router.navigate(['/auth/login']);
      }
  }

  menuUserBlur(){
    console.log('blur');

    this.menuUser.hide();
  }

}
