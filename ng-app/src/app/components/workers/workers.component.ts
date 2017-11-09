import {Component, OnInit} from '@angular/core';
import {WorkersService} from "../../services/workers.service";

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css'],
  providers: [WorkersService]
})
export class WorkersComponent implements OnInit {

  items: any[];

  constructor(private workersService: WorkersService) {
    workersService.fetch().subscribe((resp) => {
      this.items = resp.data;
    })
  }


  dbConfig = [
    {name: "name"},
    {name: "phone", type: 'number'}
  ];

  dgWorkers: Array<{}>;


  ngOnInit() {
  }

}
