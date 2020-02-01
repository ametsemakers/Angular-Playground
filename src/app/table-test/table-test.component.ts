import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-test',
  templateUrl: './table-test.component.html',
  styleUrls: ['./table-test.component.scss']
})
export class TableTestComponent implements OnInit {

  lessons = [{seqNo: 55, description: 'blabla', duration: 9 }, {seqNo: 55, description: 'blabla2', duration: 9 }];
  displayedColumns: string[] = ['seqNo', 'description', 'duration'];
  constructor() { }

  ngOnInit() {
  }

}
