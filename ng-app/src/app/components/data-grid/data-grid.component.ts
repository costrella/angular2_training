import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css'],
})
export class DataGridComponent implements OnInit {

  constructor() { }

  @Input() data;

  @Input() config : {}[];


  ngOnInit() {
  }

  showMeId(id: number){
    console.log(id)
    debugger
  }
}
