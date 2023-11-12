import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SafeUrl } from "@angular/platform-browser";

@Component({
  selector: 'app-image-ui',
  templateUrl: './image-ui.component.html',
  styleUrls: ['./image-ui.component.scss']
})
export class ImageUiComponent implements OnInit{

  @Input() srcSet: string|SafeUrl = '';
  @Input() src: string|SafeUrl = '';
  @Input() previewImageSrc: string|SafeUrl = '';
  @Input() previewImageSrcSet: string|SafeUrl = '';
  @Input() loading: "eager" | "lazy" = 'lazy';
  @Input() preview: boolean = false;
  @Input() imageClass:string = "";
  @Input() imageStyle:Object = {};
  @Input() style:Object = {};
  @Input() alt = ""


  @Output() onShow = new EventEmitter();
  @Output() onHide = new EventEmitter();
  @Output() onImageError = new EventEmitter();


  constructor(){}
  ngOnInit(): void {

  }

  onShowEmit(e:any){
    this.onShow.emit(e);
  }
  onHideEmit(e:any){
    this.onHide.emit(e);
  }
  onImageErrorEmit(e:any){
    this.onImageError.emit(e);
  }
}
