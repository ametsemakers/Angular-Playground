import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { VinylApiWebService } from '../shared/webServices/vinyl-api.webService';
import { MatDialog } from '@angular/material';
import { VinylDetailComponent } from './vinyl-detail/vinyl-detail.component';

@Component({
  selector: 'app-vinyl',
  templateUrl: './vinyl.component.html',
  styleUrls: ['./vinyl.component.scss']
})
export class VinylComponent implements OnInit {

  private subscription$: Subscription;

  vinyls = Array<any>();

  constructor(private vinylService: VinylApiWebService, public dialog: MatDialog) { }

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

  openDialog(obj) {
    const dialogRef = this.dialog.open(VinylDetailComponent, {
      width: '500px',
      data: obj
    });
  }

}
