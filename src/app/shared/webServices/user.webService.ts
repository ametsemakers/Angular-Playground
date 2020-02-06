import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserWebService {

  baseUrl = 'http://localhost:3001/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'users')
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  addUser(user): Observable<any> {
    return this.http.post(this.baseUrl + 'users', user)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  updateUser(user: User, userId: number): Observable<any> {
    return this.http.put(this.baseUrl + 'users/' + userId, user)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete(this.baseUrl + 'users/' + userId)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.log('UserWebService error', error);

    return throwError('Something bad happened; Please try again later.');
  }
}
