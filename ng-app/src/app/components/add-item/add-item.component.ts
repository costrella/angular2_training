import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgForm} from "@angular/forms";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {

  @Input() newItem: Subject<any>;

  constructor(private modalService : NgbModal) { }

  ngOnInit() {
  }

  open(content){
    this.modalService.open(content)
  }

  sendForm(form: NgForm) {
    if (form.valid) {
      this.newItem.next(form.value);
      console.log(form.value);
    } else {
      console.warn('form invalid');
    }


  }
}
