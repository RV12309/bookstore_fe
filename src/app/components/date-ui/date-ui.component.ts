import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import * as dayjs from "dayjs";

@Component({
  selector: 'app-date-ui',
  templateUrl: './date-ui.component.html',
  styleUrls: ['./date-ui.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateUiComponent),
      multi: true
    }
  ]
})
export class DateUiComponent implements OnInit, ControlValueAccessor {
  @Input() showButtonBar = false;
  @Input() dateMode:"multiple" | "range" | "single" = "single";
  @Input() placeholder = "";
  @Input() inline:boolean = false;
  @Input() showTime:boolean = false;
  @Input() readonlyInput:boolean = true;
  @Input() hourFormat:"24"|"12" = "24";
  @Input() minDateValue!:Date;
  @Input() maxDateValue!:Date;
  @Input() dateFormat = "dd-mm-yy";

  @Output() onSelect = new EventEmitter();
  @Output() onBlur = new EventEmitter();
  @Output() onTodayClick = new EventEmitter();


  public dateValue = ""

  constructor(){}
  ngOnInit(): void {

  }

  // Function to call when the rating changes.
  onChange = (value: any) => {};

  // Function to call when the input is touched (when a star is clicked).
  onTouched = () => {};

  writeValue(value: any): void {
    this.dateValue = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {

  }

  onDateSelect(event:any){
    const dateFormat = dayjs(event).format();
    this.onSelect.emit(dateFormat);
    this.onChange(dateFormat);
  }

  onDateBlur(event:any){
    this.onBlur.emit(event);
  }

  onDateTodayClick(event:any){
    this.onTodayClick.emit(event);
  }
}
