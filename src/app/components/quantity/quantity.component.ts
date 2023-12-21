import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => QuantityComponent),
      multi: true
    }
  ]
})
export class QuantityComponent implements OnInit, ControlValueAccessor {

  @Input() quantity!: number;
  @Output() changeQuantity = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public onChange = (value: number) => {};
  public onTouched =  () => {};


  writeValue(obj: any): void {

  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {

  }


  changeValue(e:any){
    switch(e?.target.id) {
      case 'decrease': 
        this.quantity--;
        break;
      case 'increase': 
        this.quantity++;
        break;
    }
    this.changeQuantity.emit(this.quantity);
  }
}
