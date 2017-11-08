import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {SumPipe} from "./pipes/sum.pipe";
import { SetColorDirective } from './directives/set-color.directive';


@NgModule({
  declarations: [
    AppComponent,
    SumPipe,
    SetColorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
