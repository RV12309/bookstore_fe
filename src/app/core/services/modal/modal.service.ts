import { ComponentRef, Injectable, Type } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { ModalNoticeComponent } from "./modal-notice.component";
import { IModalConfig, IModalOption } from "../../interfaces";
import { ModalSize } from "../../enums";
import { ModalConfirmComponent } from "src/app/components/modal-confirm/modal-confirm.component";
import { ModalAlertComponent } from "src/app/components/modal-alert/modal-alert.component";


@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private onCloseSubject = new Subject<any>();
  private onClose = new Subject<any>;
  private ref: DynamicDialogRef | undefined;
  constructor(private dialogService: DialogService) { }

  open(
    component:Type<any>,
    config:Partial<IModalConfig> | DynamicDialogConfig<any>
  ):DynamicDialogRef{
    return this.dialogService.open(
      component,
      {
        ...MODAL_CONFIG_DEFAULT,
        ...config
      }
    )
  }

  confirm(data:Partial<IModalOption>, configData?:Object, width = '350px'){
    const paramsData:Partial<IModalOption> = {
      type: 'confirm',
      modalType: ModalType['confirm'],
      ...data
    }
    this.open(
      ModalConfirmComponent,
      {
        data: paramsData,
        width,
        showHeader: false,
        ...configData
      }
    )
  }

  alert(data:Partial<IModalOption>, configData?:Object, width = '350px'){
    const paramsData:Partial<IModalOption> = {
      ...data,
      type: data?.type || 'info',
      modalType: ModalType[data?.type || 'info'],
    }
    this.open(
      ModalAlertComponent,
      {
        data: paramsData,
        width,
        showHeader: false,
        ...configData
      }
    )
  }

  close(result?: any) {
    this.ref?.destroy();
    this.onCloseSubject.next(result);
  }
}

const MODAL_CONFIG_DEFAULT:Partial<IModalConfig> = {
  width: ModalSize.Default
}

export const ModalType = {
  'confirm': {
    type: '',
    iconUrl: 'assets/icons/active/ic-question-mark-circle-outline.svg',
    iconClass: '',
    btnCancelClass: '',
    btnOkClass: 'primary',
    buttonWrapperClass: 'group-col-2 group-col-fill',
  },
  'success': {
    type: 'success',
    iconUrl: 'assets/icons/active/ic-success.svg',
    iconClass: '',
    btnCancelClass: '',
    btnOkClass: 'primary',
    buttonWrapperClass: ''
  },
  'info': {
    type: 'info',
    iconUrl: 'assets/icons/color/ic-alert-circle-outline.svg',
    iconClass: '',
    btnCancelClass: '',
    btnOkClass: 'primary',
    buttonWrapperClass: ''
  },
  'warning': {
    type: 'warning',
    iconUrl: 'assets/icons/active/ic-triangle-danger-f.svg',
    iconClass: '',
    btnCancelClass: '',
    btnOkClass: 'primary',
    buttonWrapperClass: ''
  },
  'error': {
    type: 'danger',
    iconUrl: 'assets/icons/color/ic-alert-circle-outline.svg',
    iconClass: 'icm-default_24x24-delete icm-size-default',
    btnClassConfirm: 'ubg-danger',
    btnClassCancel: 'ubg-line-default',
    buttonWrapperClass: ''
  },
  'delete': {
    type: 'danger',
    iconUrl: 'assets/icons/color/ic-alert-circle-outline.svg',
    iconClass: 'icm-default_24x24-delete icm-size-default',
    btnClassConfirm: 'ubg-danger',
    btnClassCancel: 'ubg-line-default',
    buttonWrapperClass: ''
  },
  'verify': {
    type: 'ubg-info',
    iconClass: 'assets/icons/color/ic-alert-circle-outline.svg',
    iconUrl: '',
    btnCancelClass: '',
    btnOkClass: 'primary',
    buttonWrapperClass: 'group-col-12 flex-column-reverse',
  },
}
