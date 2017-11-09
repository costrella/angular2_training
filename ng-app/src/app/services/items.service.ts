import { Injectable } from '@angular/core';
import {CRUDServiceInterface} from "./crud.service.interface";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {Settings} from "../shared/settings";

@Injectable()
export class ItemsService implements CRUDServiceInterface{

  constructor(private http: HttpClient) { }


  fetch(filters?: any): Observable<any> {
    return this.http.get(Settings.ITEMS_END_POINT);
  }

  add(item): Observable<any> {
    return undefined;
  }

  update(item): Observable<any> {
    return undefined;
  }

  remove(id): Observable<any> {
    return undefined;
  }


}
