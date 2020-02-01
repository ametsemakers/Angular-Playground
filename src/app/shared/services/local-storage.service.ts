import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getFromStorage(key) {
    if (key) {
      localStorage.getItem(key);
      console.log('LocalstorageService --- getFromStorage() --- OK');
    } else {
      console.log('LocalstorageService --- getFromStorage() --- key undefined? : ' + key);
    }
  }

  saveToStorage(key, value) {
    if (key && value) {
      localStorage.setItem(key, value);
      console.log('LocalstorageService --- saveToStorage() --- OK');
    } else {
      console.log('LocalstorageService --- getFromStorage() --- key or value undefined? --- key : ' + key + ' value : ' + value);
    }
  }

  deleteFromStorage(key) {
    if (key) {
      localStorage.removeItem(key);
      console.log('LocalstorageService --- deleteFromStorage() --- OK');
    } else {
      console.log('LocalstorageService --- deleteFromStorage() --- key undefined? : ' + key);
    }
  }

  clearStorage() {
    localStorage.clear();
    console.log('LocalstorageService --- clearStorage() --- OK');
  }
}
