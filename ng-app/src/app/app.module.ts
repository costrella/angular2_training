import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { ItemsComponent } from './components/items/items.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { WorkersComponent } from './components/workers/workers.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { SearchComponent } from './components/search/search.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { MapToIterablePipe } from './pipes/map-to-iterable.pipe';
import { AuthComponent } from './components/auth/auth.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./services/auth.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CORSInterceptor} from "./shared/cors-interceptor";
import { AddItemComponent } from './components/add-item/add-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    RegisterFormComponent,
    WorkersComponent,
    DataGridComponent,
    SearchComponent,
    MapToIterablePipe,
    AuthComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'items', component: ItemsComponent},
      {path: 'register-form', component: RegisterFormComponent},
      {path: 'workers', component: WorkersComponent}
    ]),
    HttpClientModule, FormsModule, NgbModule.forRoot(), ReactiveFormsModule
  ],
  providers: [AuthService, {
    provide: HTTP_INTERCEPTORS, useClass: CORSInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
