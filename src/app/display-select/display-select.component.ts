import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TestObservableService } from '../shared/services/test-observable.service';

@Component({
  selector: 'app-display-select',
  templateUrl: './display-select.component.html',
  styleUrls: ['./display-select.component.scss']
})
export class DisplaySelectComponent implements OnInit, OnDestroy {

  private subscriptionMessage$: Subscription;

  message: string;
  isComplete = false;

  constructor(private testObservableService: TestObservableService) { }

  ngOnInit() {
    this.subscriptionMessage$ =
      this.testObservableService.getMessageSubject().subscribe(
        (value: string) => {
          // Next
          console.log('DisplaySelectComponent --- ngOninit() --- Next ' + value);
          this.message = value;
        }, (error) => {
          // Error
          console.error('DisplaySelectComponent --- ngOninit() --- Error ' + error);
        }, () => {
          // Complete
          console.log('DisplaySelectComponent --- ngOninit() --- Complete');
          this.isComplete = true;
        }
      );
  }

  ngOnDestroy() {
    console.log('DisplaySelectComponent --- ngOnDestroy() --- RIP Component');
    if (this.subscriptionMessage$) {
      console.log('DisplaySelectComponent --- ngOnDestroy() --- unsubscribe..');
      this.subscriptionMessage$.unsubscribe();
    }
  }

}
