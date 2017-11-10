import {Injectable} from '@angular/core';
import {AuthServiceInterface} from "./auth.service.interface";
import {HttpClient} from "@angular/common/http";
import {Settings} from "../shared/settings";

@Injectable()
export class AuthService implements AuthServiceInterface {

  private _access: boolean;

  constructor(private http: HttpClient) {
  }

  isAuthenticated(): void {
    this.http.get(Settings.AUTH).subscribe((data: {ok}) => {
        this._access = data.ok;
    })
  }

  logIn(formData): void {
    this.http
      .post(Settings.LOGIN_END_POINT, formData.value)
      .subscribe((resp: { ok }) => {
        this._access = resp.ok;
      }, error2 => {
        this._access = false;
      })
  }

  logOut(): void {
    this.http.get(Settings.LOGOUT_END_POINT)
      .subscribe((data)=>{
        this._access = false;
      })
  }

  get access(): boolean {
    return this._access;
  }
}
