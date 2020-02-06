import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { UserServiceService } from 'src/app/user-view/services/user-service.service';

@Component({
  selector: 'app-user-detail-by-service',
  templateUrl: './user-detail-by-service.component.html',
  styleUrls: ['./user-detail-by-service.component.scss']
})
export class UserDetailByServiceComponent implements OnInit, OnDestroy {

  private subscriptionUser$: Subscription;

  user: User;
  isComplete = false;

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
    this.subscriptionUser$ =
      this.userService.getUser$().subscribe(
        (object: User) => {
          console.log('UserDetailByService --- ngOnInit() --- ' + object);
          this.user = object;
        }, (error) => {
          console.error('UserDetailByService --- ngOnInit() --- error');
        }, () => {
          console.log('UserDetailByService --- ngOnInit() --- complete');
          this.isComplete = true;
        }
      );
  }

  ngOnDestroy() {
    console.log('UserDetailByService --- ngOnDestroy() --- RIP Component');
    if (this.subscriptionUser$) {
      console.log('UserDetailByService --- ngOnDestroy() --- unsubscribe');
      this.subscriptionUser$.unsubscribe();
    }
  }

}
