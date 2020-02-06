import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../shared/models/user.model';
import { UserServiceService } from '../user-view/services/user-service.service';
import { UserWebService } from '../shared/webServices/user.webService';

@Component({
  selector: 'app-user-table-by-service',
  templateUrl: './user-table-by-service.component.html',
  styleUrls: ['./user-table-by-service.component.scss']
})
export class UserTableByServiceComponent implements OnInit, OnDestroy {

  private subscriptionUser$: Subscription;

  userList: User[];
  user: User;
  isComplete = false;

  inputName: string;
  inputSurname: string;
  inputAge: number;
  inputProfession: string;

  // this.userList = [
  //   new User(0, 'Alex', 'Metsemakers', 42),
  //   new User(1, 'Simon', 'Metsemakers', 18),
  //   new User(2, 'Pierre', 'Metsemakers', 25),
  //   new User(3, 'Coco', 'Metsemakers', 9)
  // ];

  constructor(private userService: UserServiceService, private userWebService: UserWebService) {
  }

  ngOnInit() {
    this.subscriptionUser$ =
      this.userService.getUser$().subscribe(
        (object: User) => {
          // Next
          console.log('UserTableByServiceComponent --- ngOnit() --- Next ' + object);
          this.user = object;
        }, (error) => {
          console.error('UserTableByServiceComponent --- ngOnit() --- Error ' + error);
        }, () => {
          console.log('UserTableByServiceComponent --- ngOnit() --- Complete');
          this.isComplete = true;
        }
      );
    this.userWebService.getUsers().subscribe(
      (data) => {
        // getUsers Next
        console.log('UserWebService --- getUsers ', data);
        this.userList = data;
      }, (error) => {
        console.error(error);
      }
    );
  }

  ngOnDestroy() {
    console.log('UserTableByServiceComponent --- ngOnDestroy() --- RIP Component');
    if (this.subscriptionUser$) {
      console.log('UserTableByServiceComponent --- ngOnDestroy() --- unsubscribe..');
      this.subscriptionUser$.unsubscribe();
    }
  }

  setObservable$(object: User) {
    console.log('UserTableByServiceComponent --- setObservable() --- object: ' + object);
    this.userService.setUser$(object);
  }

  getUser() {
    this.userWebService.getUsers().subscribe(
      (data) => {
        // getUsers Next
        console.log('UserWebService --- getUsers ', data);
        this.userList = data;
      }, (error) => {
        console.error(error);
      }
    );
  }

  addUser() {
    const user = new User(this.inputName, this.inputSurname, this.inputAge, this.inputProfession);
    this.userWebService.addUser(user).subscribe(
      (data) => {
        // getUsers Next
        console.log('UserWebService --- addUser ', data);
        this.userList = data;
      }, (error) => {
        console.error(error);
      }
    );
  }

  updateUser(user: User, id: number) {
    this.userWebService.updateUser(user, id).subscribe(
      (data) => {
        console.log('UserTableByService --- updateUser() --- ' + data);
      }, (error) => {
        console.error('UserTableByService --- updateUser() --- error ' + error);
      }
    );
  }

  deleteUser(id: number) {
    this.userWebService.deleteUser(id).subscribe(
      (data) => {
        console.log('UserTableByService --- deleteUser() --- ' + data);
      }, (error) => {
        console.error('UserTableByService --- deleteUser() --- error ' + error);
      }
    );
  }

  getInfo(value): any {
    console.log(value);
  }

}
