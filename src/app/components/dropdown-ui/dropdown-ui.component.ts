import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ISelectItem } from "src/app/core/interfaces";

@Component({
  selector: 'app-dropdown-ui',
  templateUrl: './dropdown-ui.component.html',
  styleUrls: ['./dropdown-ui.component.scss'],
})
export class DropdownUiComponent implements OnInit {
  @Input() editable = false;
  @Input() optionLabel = "name";
  @Input() optionValue = "value";
  @Input() placeholder = "";
  @Input() disabled = false;
  @Input() filter = false;
  @Input() dataList:ISelectItem[] = [];

  public cities:ISelectItem[] = [
    { name: 'New York', code: 'NY', value: "ny" },
    { name: 'Rome', code: 'RM', value: "rm" },
    { name: 'London', code: 'LDN', value: "ldn" },
    { name: 'Istanbul', code: 'IST', value: "ist" },
    { name: 'Paris', code: 'PRS', value: "prs" }
  ];

  public selectedValue!:ISelectItem;
  public form!:FormGroup;

  constructor(
    private fb: FormBuilder
  ){}


  ngOnInit(): void {
    this.form = this.fb.group({
      dropdown: [this.cities[3]]
    })
  }

  get dropdownControl(){
    return this.form.get('dropdown') as FormControl;
  }
}
