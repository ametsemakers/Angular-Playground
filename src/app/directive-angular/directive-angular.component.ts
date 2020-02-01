import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-angular',
  templateUrl: './directive-angular.component.html',
  styleUrls: ['./directive-angular.component.scss']
})
export class DirectiveAngularComponent implements OnInit {

  conditionTrue = true;
  conditionFalse = false;
  counter = 0;

  // heroes = {
  //         0: {
  //           name: 'Luke Skywalker'
  //         },
  //         1: {
  //           name: 'Han Solo'
  //         },
  //         2: {
  //           name: 'Chewbacca'
  //         }
  //    };
  heroes = ['Luke Skywalker', 'Han Solo', 'Chewbacca'];
  heroOption: string;
  heroValue: string;

  constructor() { }

  ngOnInit() {
  }

  onHeroChange(): void { // pour alternatif mettre: event: any, dans function
    // pas recommandé
    // console.log(this.heroOption = event.target.value);

    console.log(this.heroValue);
  }
}
