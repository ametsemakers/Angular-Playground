import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-color',
  templateUrl: './text-color.component.html',
  styleUrls: ['./text-color.component.scss']
})
export class TextColorComponent implements OnInit {

  textToColor = 'Ceci est un texte...';
  textToColorClass: string;
  numberFromInput: number;

  constructor() { }

  ngOnInit() {
  }

  colorText() {
    console.log(this.numberFromInput);

    if (this.numberFromInput >= 0 && this.numberFromInput < 5) {
      this.textToColorClass = 'app-color-red';
      this.textToColor = 'le nombre est petit';
      console.log(this.textToColorClass);
    } else if (this.numberFromInput >= 5 && this.numberFromInput < 10) {
      this.textToColorClass = 'app-color-blue';
      this.textToColor = 'le nombre est moyen';
      console.log(this.textToColorClass);
    } else if (this.numberFromInput >= 10 && this.numberFromInput < 15) {
      this.textToColorClass = 'app-color-green';
      this.textToColor = 'le nombre est grand';
      console.log(this.textToColorClass);
    } else {
      this.textToColorClass = 'app-color-black';
      this.textToColor = 'le nombre est inconnu';
      console.log(this.textToColorClass);
    }

  }

}
