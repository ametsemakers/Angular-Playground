import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  user$ = new Subject<User>();

  constructor() { }

  getUser$(): Observable<User> {
    console.log('UserService --- getUser() --- ' + this.user$);
    return this.user$.asObservable();
  }

  setUser$(object: User) {
    console.log('UserService --- setUser() --- ' + object);
    this.user$.next(object);
  }

  clearUser$() {
    console.log('UserService --- clearUser()');
    this.user$.next();
  }

  errorUser$() {
    this.user$.error('UserService --- errorUser() --- Oh la la, ce n\'est pas très jojo tout ça...');
  }

  completeUserService$() {
    console.log('UserService --- completeUserService()');
    this.user$.complete();
  }
}
