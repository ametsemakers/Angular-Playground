import { Component, OnInit, ChangeDetectorRef, OnChanges } from '@angular/core';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit, OnChanges {

  // C'est l'element mère qui modifie les données, les enfants n'ont pas le droit
  userList = [];
  updatedUserList = Array<User>();

  userTableComponent: User;

  constructor(private changeDetectorRefs: ChangeDetectorRef) {
    this.userList = [
      new User('Jeanne', 'D\'arc', 607, ''),
      new User('Nelson', 'Mandela', 101, ''),
      new User('Albert', 'Einstein', 140, ''),
      new User('Donald', 'Trump', 73, ''),
      new User('Friedrich', 'Nietzsche', 175, ''),
      new User('Alan', 'Turing', 107, ''),
      new User('Marie', 'Curie', 152, ''),
      new User('Michael', 'Jackson', 61, '')
    ];
  }

  ngOnInit() {
  }

  ngOnChanges(updatedUserList) {
    this.userList = this.updatedUserList;
  }

  callByUserTableComponent(event) {
    console.log('UserViewComponent --- callByUserTableComponent --- ' + event);
    this.userTableComponent = event;
    console.log('new user ' + this.userTableComponent);
  }

  callByUserDetailComponent(user: User) {
    if (user) {
      console.log('UserViewComponent --- callByUserDetailComponent() --- user : ' + user);

      const index = this.userList.indexOf(user);
      console.log('index : ' + index);
      console.log('original list ' + this.userList);

      this.userList.splice(index, 1);
      this.userList = [...this.userList];
      // console.log('updated ' + updatedUserList);
      console.log('original ' + this.userList);
    } else {
      console.log('UserViewComponent --- callByUserDetailComponent() --- user undefined? : ' + user);
    }
  }
}
