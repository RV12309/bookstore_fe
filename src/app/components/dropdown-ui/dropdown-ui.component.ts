import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR } from "@angular/forms";
import { Subject, takeUntil } from "rxjs";
import { ISelectItem } from "src/app/core/interfaces";

@Component({
  selector: 'app-dropdown-ui',
  templateUrl: './dropdown-ui.component.html',
  styleUrls: ['./dropdown-ui.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownUiComponent),
      multi: true
    }
  ]
})
export class DropdownUiComponent implements OnInit, OnChanges ,ControlValueAccessor, OnDestroy  {
  @Input() editable = false;
  @Input() optionLabel = "name";
  @Input() optionValue = "value";
  @Input() placeholder = "";
  @Input() disabled = false;
  @Input() filter = false;
  @Input() dataList:ISelectItem[] = [];
  @Input() showAllValue = true;

  @Output() dropdownOnChange = new EventEmitter();

  public cities:ISelectItem[] = [
    { name: 'New York', code: 'NY', value: "ny" },
    { name: 'Rome', code: 'RM', value: "rm" },
    { name: 'London', code: 'LDN', value: "ldn" },
    { name: 'Istanbul', code: 'IST', value: "ist" },
    { name: 'Paris', code: 'PRS', value: "prs" }
  ];
  private allValue = { name: 'Tất cả', code: 'all', value: "all" }
  public selectedValue:any;
  private destroy$ = new Subject();

  constructor(
    private fb: FormBuilder
  ){
  }

  public onChange = (value: ISelectItem) => {};
  public onTouched =  () => {};

  ngOnChanges(changes: SimpleChanges): void {
    // this.dataList = [this.allValue].concat(this.dataList);
  }

  ngOnInit(): void {

    // this.dropdownControlValueChange();
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
  }

  writeValue(obj: any) {
    this.selectedValue = obj;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  dropdownChange(event:any){
    this.onChange(event?.value);
    this.dropdownOnChange.emit(event?.value);
  }

}
