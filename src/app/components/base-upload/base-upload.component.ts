import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MessageService } from "primeng/api";
import { UploadService } from "src/app/core/services/upload.service";

@Component({
  selector: "app-base-upload",
  templateUrl: "./base-upload.component.html",
  styleUrls: ["./base-upload.component.scss"],
  providers: [MessageService]
})
export class BaseUploadComponent implements OnInit {
  @Input() chooseLabel = "Chọn file";
  @Input() multiple = true;
  @Input() auto = false;
  @Input() disabled = false;
  @Input() mode: "basic" | "advanced" = "basic";
  @Input() fileLimit = 5;
  @Input() UIMode: "custom" | "advanced" | "default" = "custom";

  @Output() fileUpload = new EventEmitter();

  private myWidget: any;
  private uploadPreset = "aoh4fpwm"; // replace with your own upload preset
  public uploadedFiles: any[] = [];
  constructor(
    private uploadService: UploadService,
    private messageService: MessageService,
  ) {}
  ngOnInit(): void {}

  openWidget() {}

  onBeforeUpload(event: any) {
  }

  onSelect(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
    console.log(event);
    this.uploadService.uploadImage(event?.currentFiles[0]).subscribe({
      next: (resp) => {
      },
    });
  }

  onUpload(event: any) {
    console.log("hihi", event);
    // this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  }

  changeFile(event: any) {
    if (this.uploadedFiles?.length === this.fileLimit) {
      this.messageService.add({
        severity: "warn",
        summary: "Cảnh báo",
        detail: `Không được upload quá ${this.fileLimit} ảnh`,
      });
      return;
    }
    for (let file of event.target?.files) {
      this.uploadedFiles.push(file);
    }
    this.fileUpload.emit(this.fileUpload);
  }

  uploadImage(){
    return;
  }

  removeImage(index: number) {
    this.uploadedFiles?.splice(index, 1);
  }
}
