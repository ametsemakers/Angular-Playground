import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestObservableService {

  messageSubject$ = new Subject<string>();

  constructor() { }

  getMessageSubject(): Observable<string> {
    console.log('TestObservableService --- getMessageSubject() --- ' + this.messageSubject$);
    return this.messageSubject$.asObservable();
  }

  setMessageSubject(value: string) {
    console.log('TestObservableService --- setMessageSubject() --- ' + value);
    this.messageSubject$.next(value);
  }

  clearMessageSubject() {
    console.log('TestObservableService --- clearMessageSubject()');
    this.messageSubject$.next('');
  }

  errorMessageSubject() {
    this.messageSubject$.error('Oh la la, ce n\'est pas très jojo tout ça...');
  }

  completeMessageSubject() {
    console.log('TestObservableService --- completeMessageSubject()');
    this.messageSubject$.complete();
  }
}
