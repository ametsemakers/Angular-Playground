import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-vinyl-detail',
  templateUrl: './vinyl-detail.component.html',
  styleUrls: ['./vinyl-detail.component.scss']
})
export class VinylDetailComponent implements OnInit {

  vinyl: any;
  showSongs = false;
  showSongButtonMessage = 'Show songs';

  constructor(public dialogRef: MatDialogRef<VinylDetailComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.vinyl = data;
  }

  ngOnInit() {
  }

  handleClickShowSongs() {
    this.showSongs = !this.showSongs;
    if (this.showSongButtonMessage === 'Show songs') {
      this.showSongButtonMessage = 'Hide songs';
    } else if (this.showSongButtonMessage === 'Hide songs') {
      this.showSongButtonMessage = 'Show songs';
    }
  }


}
