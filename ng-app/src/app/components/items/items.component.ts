import {Component, OnInit} from '@angular/core';
import {ItemsService} from "../../services/items.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  providers: [
    ItemsService
  ]
})
export class ItemsComponent implements OnInit {
  totalItems: any;


  items: any[];
  dataGridConfig = [
    {name: 'title'},
    {name: 'imgSrc', type: 'img'},
    {name: 'price', type: 'number'}]

  pp: number;

  searchControl = ['title', 'price'];

  filters: BehaviorSubject<any> = new BehaviorSubject({
    itemsPerPage: 2
  });
  constructor(private itemsService: ItemsService) {
    this.fetchItems();


    this.filters.subscribe((data) => {
      this.fetchItems();
    })

  }

  updateFilters(key, value){
    debugger
    this.filters.next({
      ...this.filters.getValue(),
      [key]: value
    });
}

  ngOnInit() {
  }

  removeItem($event : Event){

    console.log($event)
    this.itemsService.remove($event).subscribe((response) => {
        console.log(response)
    })

  }

  private fetchItems() {
    this.itemsService.fetch(this.filters.getValue()).subscribe((resp) => {
      this.items = resp.data;
      this.totalItems = resp.total;
    })
  }
}
