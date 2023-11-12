import { Injectable } from '@angular/core';
import { MessageService } from "primeng/api";
import { Observable, Subject } from "rxjs";
import { IToastProperty } from "../interfaces";

@Injectable({
  providedIn: 'root'
},)
export class ToastService {
  private toast$ = new Subject<IToastProperty>();

  constructor(
    private messageService: MessageService,
  ) { }

  public open(property:IToastProperty){
    const params:IToastProperty = {
      key:'system',
      severity: 'info',
      summary: 'Thông báo',
      sticky: false,
      life: 3500,
      position: "top-right",
      preventDuplicates: true,
      preventOpenDuplicates: true,
      ...property
    }
    this.toast$.next(params)
  }

  public toastObs():Observable<IToastProperty>{
    return this.toast$.asObservable();
  }
}
