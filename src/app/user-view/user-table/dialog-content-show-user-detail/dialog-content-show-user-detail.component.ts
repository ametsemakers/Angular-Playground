import { Component, OnInit, Inject, Output, EventEmitter, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-dialog-content-show-user-detail',
  templateUrl: './dialog-content-show-user-detail.component.html',
  styleUrls: ['./dialog-content-show-user-detail.component.scss']
})
export class DialogContentShowUserDetailComponent implements OnInit {

  @Output() eventEmitterUsernameToUpdate = new EventEmitter<any>();
  @Output() eventEmitterModifiedUser = new EventEmitter<any>();

  inputUserFirstname: string;
  inputUserLastname: string;
  inputUserAge: number;
  modifiedUser: User;
  modifyUser = false;
  moreDetails = false;
  updateUser = false;

  /* New */
  action: string;
  localData: any;

  constructor(
    public dialogRef: MatDialogRef<DialogContentShowUserDetailComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log('Modal Constructor : ' + data);
      this.localData = {...data};
      this.action = this.localData.action;
    // this.inputUserFirstname = data.user.firstname;
    // this.inputUserLastname = data.user.lastname;
    // this.inputUserAge = data.user.age;
  }

  ngOnInit() {
  }

  doAction() {
    console.log('doAction -- ' + this.action + ' ' + this.localData);
    this.dialogRef.close({event: this.action, data: this.localData});
  }

  closeDialog() {
    console.log('closeDialog -- action non transmis ' + this.action);
    this.dialogRef.close({event: 'Cancel'});
  }

  /* Old */
  handleClickUpdateUser() {
    if (this.inputUserFirstname && this.inputUserLastname && this.inputUserAge) {
      this.modifiedUser = new User(this.inputUserFirstname, this.inputUserLastname, this.inputUserAge, '');
      // userToUpdate.setFirstname(this.inputUserFirstname);
      // userToUpdate.setLastname(this.inputUserLastname);
      console.log(this.inputUserFirstname + '' + this.inputUserLastname + '' +  this.inputUserAge);
      console.log('DialogContentShowUserDetailComponent --- handleClickUpdateUser() --- OK : ' + this.modifiedUser);
      this.modifyUser = true;
      this.eventEmitterUsernameToUpdate.emit(this.data.user.firstname);
      this.eventEmitterModifiedUser.emit(this.modifiedUser);
      this.updateUser = false;
    } else {
      console.log('DialogContentShowUserDetailComponent --- handleClickUpdateUser() --- ');
    }
  }

}
