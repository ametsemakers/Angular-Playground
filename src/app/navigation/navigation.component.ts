import { Component, OnInit } from '@angular/core';
import { TestObservableService } from '../shared/services/test-observable.service';
import { User } from '../shared/models/user.model';
import { UserServiceService } from '../user-view/services/user-service.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  userList: User[];

  names = [
    {
      name: 'Alex'
    },
    {
      name: 'Pierre'
    },
    {
      name: 'Simon'
    },
    {
      name: 'Coco'
    }
  ];
  optionValue = null;

  constructor(private testObservableService: TestObservableService, private userService: UserServiceService) {
    this.userList = [
      new User('Alex', 'Metsemakers', 42, 'Chômeur'),
      new User('Simon', 'Pimon', 18, 'Développeur'),
      new User('Pierre', 'Bizot', 25, 'Braqueur'),
      new User('Coco', 'Flanel', 9, 'Créateur')
    ];
  }

  ngOnInit() {
  }

  setObservable$(object: User) {
    console.log('NavigationComponent --- setObservable() --- ' + object);
    this.userService.setUser$(object);
  }

  clearObservable$() {
    console.log('NavigationComponent --- clearObservable()');
    this.userService.clearUser$();
  }

  setObservableError$() {
    console.log('NavigationComponent --- setObservableError()');
    this.userService.errorUser$();
  }
}
