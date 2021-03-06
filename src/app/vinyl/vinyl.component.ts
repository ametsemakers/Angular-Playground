import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { VinylApiWebService } from '../shared/webServices/vinyl-api.webService';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { VinylDetailComponent } from './vinyl-detail/vinyl-detail.component';
import { VinylFormComponent } from '../vinyl-form/vinyl-form.component';
import { Vinyl, Song } from './model/vinyl.model';

@Component({
  selector: 'app-vinyl',
  templateUrl: './vinyl.component.html',
  styleUrls: ['./vinyl.component.scss']
})
export class VinylComponent implements OnInit {

  private subscription$: Subscription;

  vinyls = Array<any>();
  vinyl: Vinyl = { id: null, artist: null, titleAlbum: null, label: null,
    catNb: null, country: null, yearOriginal: null, yearEdition: null };
  song = new Song();


  constructor(private vinylService: VinylApiWebService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.subscription$ =
      this.vinylService.getVinyls(1, 20).subscribe(
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
      data: obj,
    });
  }

  openCreateDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(VinylFormComponent, dialogConfig).afterClosed(
    ).subscribe(
      (data) => {
        console.log(data);
        if (data) {
          console.log('data defined');
          this.appendFields(data);
        }
      }
    );

    // const dialogRef = this.dialog.open(VinylFormComponent, dialogConfig);
    // dialogRef.afterClosed().subscribe(
    //   (data) => {
    //     console.log('afterclosed');
    //     if (data === !undefined) {
    //       this.appendFields(data);
    //     }
    //   }
    // );
  }

  submitData(vinyl: Vinyl) {
    console.log(vinyl);
  }

  appendFields(data) {
    this.vinyl.artist = data.artist;
    this.vinyl.titleAlbum = data.titleAlbum;
    this.vinyl.label = data.label;
    this.vinyl.catNb = data.catNb;
    this.vinyl.country = data.country;
    this.vinyl.yearOriginal = data.yearOriginal;
    this.vinyl.yearEdition = data.yearEdition;
    console.log('appendfields');
    this.submitData(this.vinyl);
  }

}
