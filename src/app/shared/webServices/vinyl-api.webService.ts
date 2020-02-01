import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VinylApiWebService {
  API_URL = 'localhost/8000/vinyls';

  constructor(private httpClient: HttpClient) { }

  public getVinyls() {
    return this.httpClient.get(this.API_URL);
  }
}
