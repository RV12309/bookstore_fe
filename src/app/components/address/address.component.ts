import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { of, switchMap } from "rxjs";
import { IDistricts, IProvinces, ISelectItem, IWards } from "src/app/core/interfaces";
import { GlobalService } from "src/app/core/services";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  @Input() addressContainerClass = 'w-full grid grid-cols-3 gap-x-4';
  @Output() changeValue = new EventEmitter<any>();

  public addressForm!:FormGroup;
  public provincesList:ISelectItem[] = [];
  public districtList:ISelectItem[] = [];
  public wardList:ISelectItem[] = [];

  constructor(
    private globalService: GlobalService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getProvinces();
    this.formControlValueChange();
  }

  initForm(){
    this.addressForm = this.fb.nonNullable.group({
      province: [''],
      district: [''],
      ward: ['']
    })
  }

  getProvinces(){
    this.globalService.provinces()
    .pipe()
    .subscribe({
      next: resp => {
        this.provincesList = resp?.data?.map(
          (item: IProvinces) => {
            return {
              name: item?.provinceName,
              code: item?.provinceId,
              value: item
            }
          }
        ).sort((a, b) => a?.name?.localeCompare(b?.name))
      }
    })
  }

  formControlValueChange(){
    this.provinceControl.valueChanges
    .pipe(
      switchMap((value:ISelectItem) => {
        return this.globalService.districts(value?.code as number)
      })
    )
    .subscribe(resp => {
      this.wardControl.reset();
      this.districtList = resp?.data?.map(
        (item: IDistricts) => {
          return {
            name: item?.districtName,
            code: item?.districtId,
            value: item
          }
        }
      ).sort((a, b) => a?.name?.localeCompare(b?.name));
    });

    this.districtControl.valueChanges
    .pipe(
      switchMap((value:ISelectItem) => {
        return this.globalService.wards(value?.code as number)
      })
    )
    .subscribe(resp => {
      this.wardList = resp?.data?.map(
        (item: IWards) => {
          return {
            name: item?.wardName,
            code: item?.wardCode,
            value: item
          }
        }
      ).sort((a, b) => a?.name?.localeCompare(b?.name));
    });
  }

  public onChangeWard() {
    console.log(this.addressForm.value);
    this.changeValue.emit(this.addressForm.value)
  }

  get provinceControl(): FormControl {
    return this.addressForm.get('province') as FormControl;
  }
  get districtControl(): FormControl {
    return this.addressForm.get('district') as FormControl;
  }
  get wardControl(): FormControl {
    return this.addressForm.get('ward') as FormControl;
  }

}
