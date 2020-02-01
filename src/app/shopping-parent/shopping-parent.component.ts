import { Component, OnInit } from '@angular/core';
import { ShoppingElement } from '../shared/models/shopping-element.model';

@Component({
  selector: 'app-shopping-parent',
  templateUrl: './shopping-parent.component.html',
  styleUrls: ['./shopping-parent.component.scss']
})
export class ShoppingParentComponent implements OnInit {

  // shoppingElement: ShoppingElement;
  shoppingElements = [];

  constructor() {
    this.shoppingElements = [
                              new ShoppingElement('produit1', 5),
                              new ShoppingElement('produit2', 10),
                              new ShoppingElement('produit3', 15),
                              new ShoppingElement('produit4', 2),
                              new ShoppingElement('produit5', 8),
                            ];
  }

  ngOnInit() {
  }

}
