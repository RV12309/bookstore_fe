import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from "rxjs";
import { ILoading } from "src/app/core/interfaces";

const TIME_LOADING = 20000;

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private setLoading$ = new Subject<ILoading>()

  public setLoadingObs = this.setLoading$.asObservable();

  constructor() { }

  setLoading(isLoading:boolean, time:number = TIME_LOADING){
    this.setLoading$.next({
      isLoading,
      time
    })
  }
}
