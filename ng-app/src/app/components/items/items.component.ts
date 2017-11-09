import {Component, OnInit} from '@angular/core';
import {ItemsService} from "../../services/items.service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  providers: [
    ItemsService
  ]
})
export class ItemsComponent implements OnInit {

  items: any[];
  dataGridConfig = [
    {name: 'title'},
    {name: 'imgSrc', type: 'img'},
    {name: 'price', type: 'number'}]


  constructor(private itemsService: ItemsService) {
    itemsService.fetch().subscribe((resp) => {
      this.items = resp.data;
    })

  }

  ngOnInit() {
  }

}
