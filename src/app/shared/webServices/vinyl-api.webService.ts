import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Vinyl } from 'src/app/vinyl/model/vinyl.model';

@Injectable({
  providedIn: 'root'
})
export class VinylApiWebService {
  API_URL = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) { }

  getVinyls(page: number, size: number): Observable<any> {
    return this.httpClient.get(this.API_URL + 'vinyls/page=' + page + '/size=' + size)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  getVinylById(vinylId: number): Observable<any> {
    return this.httpClient.get(this.API_URL + 'vinyl/' + vinylId)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  addVinyl(vinyl: Vinyl): Observable<any> {
    return this.httpClient.post(this.API_URL + 'vinyl', vinyl)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  updateVinyl(vinyl: Vinyl, vinylId: number): Observable<any> {
    return this.httpClient.put(this.API_URL + 'vinyl/' + vinylId, vinyl)
      .pipe(
        catchError((error) => this.handleError(error))
    );
  }

  deleteVinyl(vinylId: number): Observable<any> {
    return this.httpClient.delete(this.API_URL + 'vinyl/' + vinylId)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError('Something unexpected happened while connecting to the server. Please try again later.');
  }
}
