import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  @Input() userList: Array<User>;
  @Input() updatedUserList: Array<User>;

  @Output() eventEmitterForUserView = new EventEmitter<any>();
  @Output() eventEmitterForUserViewDeleteUser = new EventEmitter<any>();
  userRowComponent: User;
  inputNumerValue = 0;

  // varaibles temp
  lessons = [{seqNo: 55, description: 'blabla', duration: 9 }, {seqNo: 55, description: 'blabla2', duration: 9 }];
  displayedColumns: string[] = ['firstname', 'lastname', 'age', 'update', 'delete'];

  constructor() {
  }

  ngOnInit() {
  }

  callByUserRowComponent(event) {
    this.userRowComponent = event;
    console.log('UserTableComponent --- ' + event);
    console.log('new user ' + this.userRowComponent);
    this.eventEmitterForUserView.emit(this.userRowComponent);
  }

  handleClickUpdateElement(user: User) {
    console.log('UserTableComponent --- handleClickUpdateElement() --- Update!');
  }

  handleClickDeleteElement(user: User) {
    if (user) {
      console.log('UserTableComponent --- handleClickDeleteElement() --- user : ' + user);
      this.eventEmitterForUserViewDeleteUser.emit(user);
    } else {
      console.log('UserTableComponent --- handleClickDeleteElement() --- user undefined? : ' + user);
    }
  }
}
