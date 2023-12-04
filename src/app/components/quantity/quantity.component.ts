import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss']
})
export class QuantityComponent implements OnInit {

  @Input() quantity!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
