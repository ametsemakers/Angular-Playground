import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  @Input() userTableComponent: User;

  @Output() eventEmitterForUserViewFromDetail = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  handleClickDeleteUserFromUserDetail(user: User) {
    console.log(user);
    if (user) {
      this.eventEmitterForUserViewFromDetail.emit(user);
      console.log('UserDetailComponent --- handleClickDeleteUserFromUserDetail() --- pass');
    } else {
      console.log('UserDetailComponent --- handleClickDeleteUserFromUserDetail() --- User not defined? : ' + user);
    }
  }

}
