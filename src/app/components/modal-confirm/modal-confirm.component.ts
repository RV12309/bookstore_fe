import { Component, OnDestroy, OnInit } from "@angular/core";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { IModalOption } from "src/app/core/interfaces";

@Component({
  selector: "app-modal-confirm",
  templateUrl: "./modal-confirm.component.html",
  styleUrls: ["./modal-confirm.component.scss"],
})
export class ModalConfirmComponent implements OnInit, OnDestroy{

  public dialogConfigData!:Partial<IModalOption>;



  constructor(
    private ref: DynamicDialogRef,
    private dialogConfig: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    this.dialogConfigData = this.dialogConfig?.data;
    console.log(this.dialogConfig?.data);
  }

  ngOnDestroy(): void {
    // this.ref.destroy();
  }

  accept(){
    if(this.dialogConfig?.data?.accept){
      this.dialogConfig?.data?.accept();
    }
    this.closeModal();
    setTimeout(() => this.ref.destroy(), 500)
  }

  closeModal(){
    this.ref.close();
  }


}
