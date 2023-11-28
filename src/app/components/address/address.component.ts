import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { GlobalService } from "src/app/core/services";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  @Input() addressContainerClass = 'w-full grid grid-cols-3 gap-x-4';

  public addressForm!:FormGroup;

  constructor(
    private globalService: GlobalService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.addressForm = this.fb.group({
      province: [''],
      district: [''],
      ward: ['']
    })
  }

}
