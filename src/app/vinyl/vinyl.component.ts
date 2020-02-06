import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { VinylApiWebService } from '../shared/webServices/vinyl-api.webService';

@Component({
  selector: 'app-vinyl',
  templateUrl: './vinyl.component.html',
  styleUrls: ['./vinyl.component.scss']
})
export class VinylComponent implements OnInit {

  private subscription$: Subscription;

  vinyls = Array<any>();

  constructor(private vinylService: VinylApiWebService) { }

  ngOnInit() {
    this.subscription$ =
      this.vinylService.getVinyls().subscribe(
        (data) => {
          console.log(data);
          this.vinyls = data;
        }, (error) => {
          console.error(error);
        }
      );
  }

}
