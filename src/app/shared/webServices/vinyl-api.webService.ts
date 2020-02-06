import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VinylApiWebService {
  API_URL = 'http://localhost:8080/api/vinyls';

  constructor(private httpClient: HttpClient) { }

  getVinyls(): Observable<any> {
    return this.httpClient.get(this.API_URL)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError('Something unexpected happened while connecting to the server. Please try again later.');
  }
}
