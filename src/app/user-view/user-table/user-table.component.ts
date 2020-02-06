import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/shared/models/user.model';
import { DialogContentShowUserDetailComponent } from './dialog-content-show-user-detail/dialog-content-show-user-detail.component';
import { MatTable } from '@angular/material';
import { UserServiceService } from '../services/user-service.service';
import { Subscription } from 'rxjs';

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
  userToViewDetailFrom: User;
  inputNumerValue = 0;

  showUserDetailComponent: DialogContentShowUserDetailComponent;

  // varaibles temp
  lessons = [{seqNo: 55, description: 'blabla', duration: 9 }, {seqNo: 55, description: 'blabla2', duration: 9 }];
  displayedColumns: string[] = ['firstname', 'lastname', 'age', 'add', 'edit', 'delete'];

  @ViewChild(MatTable, {static: true}) table: MatTable<any>;

  private subscriptionUser$: Subscription;

  optionsUser: User;
  isComplete = false;

  constructor(public dialog: MatDialog, private userService: UserServiceService) {
  }

  ngOnInit() {
    this.subscriptionUser$ =
      this.userService.getUser$().subscribe(
        (object: User) => {
          // Next
          console.log('UserTableComponent --- ngOnit() --- Next ' + object);
          this.optionsUser = object;
        }, (error) => {
          console.log('UserTableComponent --- ngOnit() --- Error ' + error);
        }, () => {
          console.log('UserTableComponent --- ngOnit() --- Complete');
          this.isComplete = true;
        }
      );
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

  openDialog(action, obj) {
    // this.userToViewDetailFrom = user;
    obj.action = action;
    const dialogRef = this.dialog.open(DialogContentShowUserDetailComponent, {
      width: '400px',
      data: obj
    });
    // console.log(this.showUserDetailComponent.modifyUser.valueOf());
    // if (this.showUserDetailComponent.modifyUser.valueOf()) {
    //   this.showUserDetailComponent.eventEmitterModifiedUser.subscribe((modifiedUser: User) => {
    //     console.log('UserTableComponents ' + modifiedUser);
    //   });

    //   this.showUserDetailComponent.eventEmitterUsernameToUpdate.subscribe((originalUserName: string) => {
    //     console.log('UserTableComponents ' + originalUserName);
    //   });

    // }

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ${result}' + result.event);
      if (result.event === 'Add') {
        console.log('Passage afterClosed -- Add');
        this.addRowData(result.data);
      } else if (result.event === 'Update') {
        console.log('Passage afterClosed -- Update');
        this.updateRowData(result.data);
      } else if (result.event === 'Delete') {
        console.log('Passage afterClosed -- Delete');
        // this.deleteRowData(result.data);
        this.eventEmitterForUserViewDeleteUser.emit(result.data);
      }
    });
  }

  addRowData(object) {
    if (object) {
      this.userList.push(new User(object.firstname, object.lastname, object.age, ''));
      this.table.renderRows();
    } else {
      console.log('UserTableComponent --- addRowData() --- object undefined? : ' + object);
    }
  }

  updateRowData(object) {
    if (object) {
      this.userList = this.userList.filter((value, key) => {
        if (value.surname === object.lastname) {
          value.name = object.firstname;
          value.surname = object.lastname;
          value.age = object.age;
        }
        return true;
      });
    }
  }
}
