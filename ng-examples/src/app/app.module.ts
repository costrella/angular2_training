import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {SumPipe} from "./pipes/sum.pipe";
import { SetColorDirective } from './directives/set-color.directive';
import {DataService} from "./services/data.service";
import {HttpClientModule} from "@angular/common/http";
import { ProductComponent } from './components/product/product.component';
import { ImageFrameComponent } from './components/image-frame/image-frame.component';
import { WorkerCardComponent } from './components/worker-card/worker-card.component';


@NgModule({
  declarations: [
    AppComponent,
    SumPipe,
    SetColorDirective,
    ProductComponent,
    ImageFrameComponent,
    WorkerCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
