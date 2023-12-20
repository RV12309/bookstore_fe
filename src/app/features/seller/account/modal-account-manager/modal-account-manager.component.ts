import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { JWTStorageKey } from 'src/app/core/enums';
import { ISelectItem } from 'src/app/core/interfaces';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { ModalService } from 'src/app/core/services/modal';
import { UploadService } from 'src/app/core/services/upload.service';
import { UserService } from 'src/app/core/services/user/user.service';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-modal-account-manager',
  templateUrl: './modal-account-manager.component.html',
  styleUrls: ['./modal-account-manager.component.scss']
})
export class ModalAccountManagerComponent {
  
  public form!: FormGroup;
  public selectedFile: File | null = null;
  public categoryList!: ISelectItem[];
  public imageUrl: string[] = [];
  public genders = [
    {name: 'Nam', code: 'MALE', value: 'MALE'},
    {name: 'Nữ', code: 'FEMALE', value: 'FEMALE'},
    {name: 'Khác', code: 'OTHER', value: 'OTHER'}
  ]

  constructor(
    private formBuilder: FormBuilder,
    private modalRef: DynamicDialogRef,
    private uploadService: UploadService,
    private modalService: ModalService,
    private userService: UserService,
    private authService: AuthService
  ){}

  ngOnInit(): void {
    this.initForm();
    this.getCustomerInfo();
  }

  public initForm(){
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      dob: ['', Validators.required],
      province: [null, Validators.required],
      ward: [null, Validators.required],
      district: [null, Validators.required],
      specificAddr: [null, Validators.required]
    })
  }

  submit(){
    console.log(this.form?.value);
    const id = this.authService.getDataByKey(JWTStorageKey.account).id;
    console.log(id);
    const {name, gender, email, 
    phone,
    dob,
    province,
    ward, specificAddr,
    district} = this.form.value;
    const params = {
      name, 
      gender: gender.code, 
      email, 
    phone,
    dob,
    province,
    provinceId: '0001',
    ward,
    wardCode: '0100', 
    district,
    districtId: '0473',
    id,
    firstAddress: specificAddr
  }
    console.log(params);
    this.userService.updateSellerInfo(params).subscribe({
      next: () => {
        this.modalService.alert({
          type: 'success',
          message: 'Thay đổi thông tin thành công'
        });
        this.closeModal();
      },
      error: (err) => {
        this.modalService.alert({
          type: 'error',
          message: err.message
        })
      }
    })
  }

  closeModal(){
    this.modalRef.close();
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadImage() {
    if (this.selectedFile) {
      this.uploadService.uploadImage(this.selectedFile).subscribe(
        response => {
          console.log('Upload successful!', response);
        },
        error => {
          console.error('Error uploading image:', error);
        }
      );
    }
  }

  getCustomerInfo(){
    this.userService.getCustomerInfo().subscribe({
      next: res => {
        console.log(res);
        this.form.patchValue(res.data);
        const gender = this.genders.find((item) => 
          item.code === res.data.gender
        );
        this.formControls['gender'].patchValue(gender);
        this.formControls['dob'].patchValue(dayjs(res.data.dob).toDate());
      },
      error: err => this.modalService.alert({
        type: 'error',
        message: err.message
      })
    })
  }

  onUploadFile(e: any){
    console.log(e.url);
  }

  public get formControls(){
    return this.form.controls;
  }

}
