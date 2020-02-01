import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expression-component',
  templateUrl: './expression.component.html',
  styleUrls: ['./expression.component.scss']
})
export class ExpressionComponent implements OnInit {

  colorClass = 'app-bg-red';
  inputType = 'text';
  inputText = 'Alex';
  moduleText: string;

  constructor() { }

  ngOnInit() {
  }

}
