import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from "primeng/dynamicdialog";
import { ISelectItem } from 'src/app/core/interfaces';
import { BooksService } from 'src/app/core/services/books/books.service';
import { CategoryService } from 'src/app/core/services/category/category.service';
import { ModalService } from 'src/app/core/services/modal';
import { UploadService } from "src/app/core/services/upload.service";

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit{

  public formBook!: FormGroup;
  public selectedFile: File | null = null;
  public categoryList!: ISelectItem[];
  public imageUrl: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private modalRef: DynamicDialogRef,
    private uploadService: UploadService,
    private categoryService: CategoryService,
    private modalService: ModalService,
    private bookService: BooksService
  ){}
  ngOnInit(): void {
    this.initForm();
    this.getList();
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
      quantity: [null, Validators.required],
      urlThumbnail: [null, Validators.required],
      urlImageCover:[null, Validators.required],
      imagesUrls: [null, Validators.required]
    })
  }

  submit(){
    console.log(this.formBook?.value);
    console.log(this.imageUrl)
    const {title, author, description, publisher, publishDate, numberOfPage, price, quantity, urlThumbnail, urlImageCover, imagesUrls} = this.formBook.value;
    const params = {
      title, author, description, publisher, publishDate, numberOfPage, price, quantity, urlThumbnail, urlImageCover,
      categoryIds: [this.formBook.value.categoryId.code],
      imagesUrls: this.imageUrl
    }
    console.log(params);
    this.bookService.createBook(params).subscribe((res) => {
      this.closeModal();
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

  async getList(){
    await this.categoryService.getCategoryAll().subscribe({
      next: resp => {
        this.categoryList = resp.data.map((item: any) => {
          return {
            name: item.name,
            code: item.id,
            value: item,
          };
        })
      },
      error: error => {
        this.modalService.alert(
          {
            type: 'error',
            message: error?.error?.message || 'Lỗi hệ thống',
            btnOkName: 'Đóng',
          }
        )
      }
    })
  }

  onUploadFile(type: string, e: any){
    console.log(type, 'data', e.url);
    switch(type){
      case 'thumbnail':
        this.formBook.controls['urlThumbnail'].patchValue(e.url);
        break;
      case 'cover':
        this.formBook.controls['urlImageCover'].patchValue(e.url);
        break;
      case 'preview':
        this.imageUrl?.push(e.url.toString());
        // this.formBook.controls['imagesUrls'].patchValue(e.url);
        break;
    }
  }
}
