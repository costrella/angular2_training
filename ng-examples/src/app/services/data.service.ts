import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DataService {

  contacts: any[] = [
    {name: "Joe", phone: 1234234},
    {name: "Mike", phone: 81234234},
    {name: "Cezary", phone: 41234234},
    {name: "Ele", phone: 34234},
    {name: "Zed", phone: 234234}
  ];

  images: string[] = [
    'https://api.emitter.pl/assets/tomato.jpg',
    'https://api.emitter.pl/assets/pumpkin.jpg',
    'https://api.emitter.pl/assets/potatoes.jpg'
  ];

  constructor(private http: HttpClient) { }

  getItemsFromServer(): Observable<any>{
    return this.http.get('https://api.emitter.pl/items');
  }

}
