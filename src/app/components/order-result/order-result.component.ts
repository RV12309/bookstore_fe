import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-result',
  templateUrl: './order-result.component.html',
  styleUrls: ['./order-result.component.scss']
})
export class OrderResultComponent implements OnInit {

  public order: any;
  constructor(
    private router: Router
  ) { 
    this.order = this.router.getCurrentNavigation()?.extras?.state;
  }

  ngOnInit(): void {
  }

  public redirect(){
    this.router.navigate(['/products'])
  }

}
