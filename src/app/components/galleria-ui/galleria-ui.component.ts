import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-galleria-ui",
  templateUrl: "./galleria-ui.component.html",
  styleUrls: ["./galleria-ui.component.scss"],
})
export class GalleriaUiComponent implements OnInit {
  public images: any = [];
  public responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 3
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];
  constructor() {}

  ngOnInit(): void {
    this.images = [
      {
        previewImageSrc: "https://images.unsplash.com/photo-1682687982470-8f1b0e79151a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        thumbnailImageSrc: "https://images.unsplash.com/photo-1682687982470-8f1b0e79151a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Description for Image 1",
        title: "Title 1",
      },
      {
        previewImageSrc: "https://images.unsplash.com/photo-1700451761281-fa705b64935d?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        thumbnailImageSrc: "https://images.unsplash.com/photo-1700451761281-fa705b64935d?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Description for Image 2",
        title: "Title 2",
      },
      {
        previewImageSrc: "https://images.unsplash.com/photo-1577956239460-00b14ecd16d0?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        thumbnailImageSrc: "https://images.unsplash.com/photo-1577956239460-00b14ecd16d0?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Description for Image 3",
        title: "Title 3",
      }
    ];
  }
}
