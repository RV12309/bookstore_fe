import { Injectable } from '@angular/core';
import { JWTStorageKey, StorageKey } from "../enums";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor() { }

  setSession(key: StorageKey, value:string) {
    window.sessionStorage.setItem(key, value);
  }

  setLocal(key: StorageKey, value:string) {
    window.localStorage.setItem(key, value);
  }

  getSession(key: StorageKey) {
    return window.sessionStorage.getItem(key);
  }

  getLocal(key: StorageKey) {
    return window.localStorage.getItem(key);
  }

  removeSession(key: StorageKey) {
    window.sessionStorage.removeItem(key);
  }

  removeLocal(key: StorageKey) {
    window.localStorage.removeItem(key);
  }

  clearSession(){
    window.sessionStorage.clear();
  }

  clearLocal(){
    window.localStorage.clear();
  }
}
