import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from "primeng/dynamicdialog";
import { UploadService } from "src/app/core/services/upload.service";

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit{

  public formBook!: FormGroup;
  public selectedFile: File | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private modalRef: DynamicDialogRef,
    private uploadService: UploadService
  ){}
  ngOnInit(): void {
    this.initForm();
  }

  public initForm(){
    this.formBook = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required],
      categoryId: [null, Validators.required],
      publisher: ['', Validators.required],
      publishDate: ['', Validators.required],
      numberOfPage: [null, Validators.required],
      price: [null, Validators.required],
      quantity: [null, Validators.required]
    })
  }

  submit(){
    console.log(this.formBook?.value);
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
}
