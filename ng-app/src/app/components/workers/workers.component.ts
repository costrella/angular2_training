import {Component, OnInit} from '@angular/core';
import {WorkersService} from "../../services/workers.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css'],
  providers: [WorkersService]
})
export class WorkersComponent implements OnInit {

  items: any[];

  searchControl = ['title', 'price'];

  constructor(private workersService: WorkersService) {
    workersService.fetch().subscribe((resp) => {
      this.items = resp.data;
    })


  }

  filters: BehaviorSubject<any> = new BehaviorSubject({
    itemsPerPage: 2
  });

  dbConfig = [
    {name: "name"},
    {name: "phone", type: 'number'}
  ];

  dgWorkers: Array<{}>;


  ngOnInit() {
  }


}
