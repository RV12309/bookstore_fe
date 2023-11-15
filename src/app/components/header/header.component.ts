import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from "primeng/menu";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('menuUser', {static: false}) menuUser!:Menu;
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
    console.log(true);

    this.menuUser.toggle;
    return;
      const token = sessionStorage.getItem('token');
      if(token){
          this.router.navigate(['/']);
          sessionStorage.removeItem('userData');
      } else {
          this.router.navigate(['/auth/login']);
      }
  }

}
