import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { of, switchMap } from "rxjs";
import { IDistricts, IProvinces, ISelectItem, IWards } from "src/app/core/interfaces";
import { GlobalService } from "src/app/core/services";
import { ModalService } from 'src/app/core/services/modal';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  @Input() addressContainerClass = 'w-full grid grid-cols-1 md:grid-cols-3 gap-y-3 md:gap-y-0 gap-x-3';
  @Output() changeValue = new EventEmitter<any>();
  @Input() defaultAddr: any;

  public addressForm!:FormGroup;
  public provincesList:ISelectItem[] = [];
  public districtList:ISelectItem[] = [];
  public wardList:ISelectItem[] = [];

  constructor(
    private globalService: GlobalService,
    private fb: FormBuilder,
    private modal: ModalService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getProvinces();  }

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
        ).sort((a, b) => a?.name?.localeCompare(b?.name));
        if(this.defaultAddr){
          const province = this.provincesList.find((item: any) => item.code === this.defaultAddr.provinceId);
          this.addressForm.controls['province'].patchValue(province)
        }
      }
    })
  }

  // formControlValueChange(){
  //   this.provinceControl.valueChanges
  //   .pipe(
  //     switchMap((value:ISelectItem) => {
  //       return this.globalService.districts(value?.code as number)
  //     })
  //   )
  //   .subscribe(resp => {
  //     this.wardControl.reset();
  //     this.districtList = resp?.data?.map(
  //       (item: IDistricts) => {
  //         return {
  //           name: item?.districtName,
  //           code: item?.districtId,
  //           value: item
  //         }
  //       }
  //     ).sort((a, b) => a?.name?.localeCompare(b?.name));
  //   });

  //   // this.districtControl.valueChanges
  //   // .pipe(
  //   //   switchMap((value:ISelectItem) => {
  //   //     return this.globalService.wards(value?.code as number)
  //   //   })
  //   // )
  //   // .subscribe(resp => {
  //   //   this.wardList = resp?.data?.map(
  //   //     (item: IWards) => {
  //   //       return {
  //   //         name: item?.wardName,
  //   //         code: item?.wardCode,
  //   //         value: item
  //   //       }
  //   //     }
  //   //   ).sort((a, b) => a?.name?.localeCompare(b?.name));
  //   // });
  // }

  onChangeProvince(e: any){
    this.globalService.districts(e.code).subscribe({
      next: resp => {
      this.districtList = resp?.data?.map(
        (item: IDistricts) => {
          return {
            name: item?.districtName,
            code: item?.districtId,
            value: item
          }
        }
      ).sort((a, b) => a?.name?.localeCompare(b?.name));
      if(this.defaultAddr){
        const district = this.districtList.find((item: any) => item.code === this.defaultAddr.districtId);
        this.addressForm.controls['district'].patchValue(district)
      }
    },
    error: err => {
      this.modal.alert({
        type: 'error',
        message: err.message
      }),
      this.wardList = []
    }
  });
  }


  onChangeDistrict(e: any){
    this.globalService.wards(e.code).subscribe({
      next: resp => {
      this.wardList = resp?.data?.map(
        (item: IWards) => {
          return {
            name: item?.wardName,
            code: item?.wardCode,
            value: item
          }
        }
      ).sort((a, b) => a?.name?.localeCompare(b?.name));
      if(this.defaultAddr){
        const ward = this.wardList.find((item: any) => item.code === this.defaultAddr.wardCode);
        this.addressForm.controls['ward'].patchValue(ward)
      }
    },
    error: err => {
      this.modal.alert({
        type: 'error',
        message: err.message
      }),
      this.wardList = []
    }
  });
  }

  public onChangeWard() {
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
