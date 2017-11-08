import { Component } from '@angular/core';

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
  items: any[] = [1,2,3,4];
  bgColor = '#ff0000';
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
}
