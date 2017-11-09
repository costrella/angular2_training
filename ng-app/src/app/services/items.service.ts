import { Injectable } from '@angular/core';
import {CRUDServiceInterface} from "./crud.service.interface";
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Settings} from "../shared/settings";

@Injectable()
export class ItemsService implements CRUDServiceInterface{

  constructor(private http: HttpClient) { }


  fetch(filters?: any): Observable<any> {
    // debugger
    // let params: HttpParams = new HttpParams();
    //
    // for (var key in filters) {
    //   params = params.append(key, filters[key])
    // }
    return this.http.get(Settings.ITEMS_END_POINT, {params: filters});
  }

  add(item): Observable<any> {
    return undefined;
  }

  update(item): Observable<any> {
    return undefined;
  }

  remove(id): Observable<any> {
    return this.http.delete(Settings.ITEMS_END_POINT + "/" + id);
  }


}
