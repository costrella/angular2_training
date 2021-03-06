import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-image-frame',
  templateUrl: './image-frame.component.html',
  styleUrls: ['./image-frame.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ImageFrameComponent implements OnInit {

  @Input() data;
  @Output() clickEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  showImg() {
    this.clickEvent.emit(this.data)
  }
}
