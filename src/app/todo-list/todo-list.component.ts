import { Component, OnInit } from '@angular/core';
import { ShoppingElement } from '../shared/models/shopping-element.model';
import { LocalStorageService } from '../shared/services/local-storage.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  keyValue: string;
  valValue: string;
  inputName: string;
  inputQte: number;
  shoppingElements = [];

  constructor(private localStorageService: LocalStorageService) {
    this.shoppingElements = [
      new ShoppingElement('bananes', 5),
      new ShoppingElement('poires', 10),
      new ShoppingElement('pommes', 15),
      new ShoppingElement('fraises', 2),
      new ShoppingElement('melons', 8),
    ];
  }

  ngOnInit() {
  }

  handleClickInputTable() {
    if (this.inputName && this.inputQte) {
      console.log('handleClickInputTable() --- ' + this.inputName + ' ' + this.inputQte);
      this.shoppingElements.push(new ShoppingElement(this.inputName, this.inputQte));
    } else {
      console.log('TodoListComponent --- handleClickInputTable() --- Ce n\'est pas normal...');
    }
  }

  handleClickDeleteElementFromTable(index) {
    if (index) {
      console.log('handleClickDeleteElementFromTable() --- ' + index);
      this.shoppingElements.splice(index, 1);
    } else {
      console.log('TodoListComponent --- handleClickDeleteElementFromTable() --- Ce n\'est pas normal...');
    }
  }

  handeClickSaveToLocalStorage() {
    if (this.keyValue && this.valValue) {
      this.localStorageService.saveToStorage(this.keyValue, this.valValue);
      console.log('TodoListComponent --- handeClickSaveToLocalStorage() --- OK');
    } else {
      console.log('TodoListComponent --- handeClickSaveToLocalStorage() --- key or value undefined? --- key : '
      + this.keyValue + ' value : ' + this.valValue);
    }
  }

  handleClickGetFromLocalStorage() {
    if (this.keyValue) {
      this.localStorageService.getFromStorage(this.keyValue);
      console.log('TodoListComponent --- handleClickGetFromLocalStorage() --- OK');
    } else {
      console.log('TodoListComponent --- handleClickGetFromLocalStorage() --- key undefined? --- key : ' + this.keyValue);
    }
  }

  handleClickDeleteFromLocalStorage() {
    if (this.keyValue) {
      this.localStorageService.deleteFromStorage(this.keyValue);
      console.log('TodoListComponent --- handleClickDeleteFromLocalStorage() --- OK');
    } else {
      console.log('TodoListComponent --- handleClickDeleteFromLocalStorage() --- key undefined? --- key : ' + this.keyValue);
    }
  }

  handleClickClearLocalStorage() {
    this.localStorageService.clearStorage();
    console.log('TodoListComponent --- handleClickClearLocalStorage() --- OK');
  }
}
