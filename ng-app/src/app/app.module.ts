import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { ItemsComponent } from './components/items/items.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { WorkersComponent } from './components/workers/workers.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { SearchComponent } from './components/search/search.component';
import {HttpClientModule} from "@angular/common/http";
import { MapToIterablePipe } from './pipes/map-to-iterable.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    RegisterFormComponent,
    WorkersComponent,
    DataGridComponent,
    SearchComponent,
    MapToIterablePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'items', component: ItemsComponent},
      {path: 'register-form', component: RegisterFormComponent},
      {path: 'workers', component: WorkersComponent}
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
