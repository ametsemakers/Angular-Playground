import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: '[app-user-row]',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.scss'],
})
export class UserRowComponent implements OnInit {

  @Input() userList: Array<User>;
  @Input() user: User;

  @Output() eventEmitterForUserTable = new EventEmitter<any>();

  userSelected: User;

  constructor() { }

  ngOnInit() {
    console.log(this.user);
  }

  handleClickSendUserToParent(user: User) {
    if (user) {
      console.log('UserRowComponent --- handleClickSendUserToParent() --- ' + user);
      this.user = user;
      this.eventEmitterForUserTable.emit(this.user);
    } else {
      console.log('UserRowComponent --- handleClickSendUserToParent() --- l\index : ' + user);
    }
  }
}
