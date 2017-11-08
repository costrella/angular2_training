import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-worker-card',
  templateUrl: './worker-card.component.html',
  styleUrls: ['./worker-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WorkerCardComponent implements OnInit {

  @Input() data;
  @Output() clickEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  doOutput(){
    debugger
    this.clickEvent.emit(this.data.phone)
  }

}
