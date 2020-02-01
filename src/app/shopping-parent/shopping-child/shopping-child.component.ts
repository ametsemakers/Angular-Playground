import { Component, OnInit, Input } from '@angular/core';
import { ShoppingElement } from 'src/app/shared/models/shopping-element.model';

@Component({
  selector: 'app-shopping-child',
  templateUrl: './shopping-child.component.html',
  styleUrls: ['./shopping-child.component.scss']
})
export class ShoppingChildComponent implements OnInit {

  @Input() shoppingElements: Array<ShoppingElement>; // ShoppingElement[]

  tableBodyClass = 'app-table-body';

  constructor() { }

  ngOnInit() {
  }

}
