import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = '191a6b2fa6c0df144eba8f7ac4ab295d';
  API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=';

  constructor(private httpClient: HttpClient) { }

  public getMovies() {
    return this.httpClient.get(this.API_URL + this.API_KEY + '&sort_by=popularity.desc&page=1');
  }

  // fonctionnement de httpClient.get :
//   get(url: string, options: {
//     headers?: HttpHeaders;
//     observe: 'response';
//     params?: HttpParams;
//     reportProgress?: boolean;
//     responseType?: 'json';
//     withCredentials?: boolean;
// }): Observable<HttpResponse<Object>>;
}
