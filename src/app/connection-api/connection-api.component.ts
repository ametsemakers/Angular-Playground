import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/webServices/api.service';

@Component({
  selector: 'app-connection-api',
  templateUrl: './connection-api.component.html',
  styleUrls: ['./connection-api.component.scss']
})
export class ConnectionApiComponent implements OnInit {

  data;
  dataResults = 'results';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getMovies().subscribe((data) => {
      console.log(data);
      this.data = data[this.dataResults];
    });
  }
}
