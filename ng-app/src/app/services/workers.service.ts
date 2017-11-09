import {Injectable} from '@angular/core';
import {CRUDServiceInterface} from "./crud.service.interface";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {Settings} from "../shared/settings";

@Injectable()
export class WorkersService implements CRUDServiceInterface {

  fetch(filters?: any): Observable<any> {
    return this.http.get(Settings.WORKERS_END_POINT);
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

  constructor(private http: HttpClient) {
  }

}
