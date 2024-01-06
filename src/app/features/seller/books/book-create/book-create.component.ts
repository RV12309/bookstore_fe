import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { Action } from 'src/app/core/enums';
import { ISelectItem } from 'src/app/core/interfaces';
import { IBookCreate, IBookData } from 'src/app/core/interfaces/books.interface';
import { BooksService } from 'src/app/core/services/books/books.service';
import { CategoryService } from 'src/app/core/services/category/category.service';
import { ModalService } from 'src/app/core/services/modal';
import { UploadService } from "src/app/core/services/upload.service";
import * as dayjs from 'dayjs';
import { ICategoryData } from 'src/app/core/interfaces/category.interface';

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
  public action:  Action = Action.Create;
  public data: IBookData = {};
  public Action = Action;
  public urlThumbnail: any;
  public urlImageCover: any;
  public imagesUrls: any
  
  constructor(
    private formBuilder: FormBuilder,
    private modalRef: DynamicDialogRef,
    private uploadService: UploadService,
    private categoryService: CategoryService,
    private modalService: ModalService,
    private bookService: BooksService,
    private dialogConfig: DynamicDialogConfig,
  ){}
  ngOnInit(): void {
    this.initForm();
    this.getList();
    this.initParams();
    this.handleRoute();
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
    if(this.action === Action.Create) {this.bookService.createBook(params).subscribe((res) => {
      this.closeModal();
    })} else if(this.action === Action.Update) {
      const param = {
        ...params,
        isbn: this.data.isbn
      }
      this.bookService.update(this.data.id || '', param).subscribe((res) => {
        this.closeModal();
      })
    }
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

  initParams(){
    this.action = this.dialogConfig.data?.type;
    this.data = this.dialogConfig.data?.item;
  }

  handleRoute(){
    switch(this.action){
      case Action.Detail:
        this.formBook.patchValue(this.data);
        this.formBook.disable();
        this.formBook.controls['publishDate'].patchValue(dayjs(this.data.publishDate).toDate());
        const category = this.categoryList.find((category: any) => category.id === this.data.categories[0].id)
        this.urlImageCover = [this.data.urlImageCover];
        this.urlThumbnail = [this.data.urlThumbnail];
        break;
      case Action.Update:
        this.formBook.patchValue(this.data);
        this.formBook.controls['publishDate'].patchValue(dayjs(this.data.publishDate).toDate())
        break;
    }
  }
}
