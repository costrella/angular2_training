import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {

  @Input() controls: string[];
  @Input() filters: BehaviorSubject<any>
  @ViewChild('searchForm') form;

  constructor() {

  }

  ngOnInit() {
    this.form.valueChanges.subscribe((value) => {
      this.filters.next({
        ...this.filters.getValue(), ...value
      });

    })
  }

}
