import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-typage-angular',
  templateUrl: './typage-angular.component.html',
  styleUrls: ['./typage-angular.component.scss']
})
export class TypageAngularComponent implements OnInit {

  user: User;

  constructor() {
    this.user = new User('Alex', 'Metsemakers', 18, 'Développeur');
  }

  ngOnInit() {
  }

}
