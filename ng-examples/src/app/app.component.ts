import {Component} from '@angular/core';
import {DataService} from "./services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  today: number = Date.now();
  money = [20000, 500000, 700000, 10000];
  access: boolean = true;
  items: any[];
  bgColor = '#ff0000';
  contacts: any[];
  images: string[];

  constructor(private dataService: DataService) {
    dataService.getItemsFromServer()
      .subscribe((data) => {
        this.items = data.data;
        debugger;
      })
    this.contacts = dataService.contacts;
    this.images = dataService.images;
  }
}
