import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css'],
})
export class DataGridComponent implements OnInit {

  constructor() { }

  @Input() data;

  @Input() config : {}[];

  @Output() removeEvent: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }

  remove (id){
    this.removeEvent.emit(id)
  }
}
