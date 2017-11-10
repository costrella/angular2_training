import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "../../shared/custom-validators";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {Settings} from "../../shared/settings";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {

  form: FormGroup;

  constructor(private http: HttpClient) {
    this.form = new FormGroup({
        name: new FormControl('Wiesiek',
          [Validators.required, Validators.minLength(3)], this.serverValidation.bind(this)),
        password: new FormControl('', [
          Validators.required, Validators.minLength(3),
          Validators.pattern(/(?=.*[A-Z])(?=.*\w).{8,}/)]
        ),
        birthDate: new FormControl(Date.now(), CustomValidators.passedDateRequired
        ),
        hobbies: new FormGroup({
          discoPolo: new FormControl(''),
          fishing: new FormControl(''),
          movies: new FormControl(''),
          running: new FormControl('')

        }, CustomValidators.atLeastOneShouldBeSelected)
      },
    );

    this.form.valueChanges
      .filter((value) => {
        if (value.name.includes('dupa')) {
          alert('brzydkie wyrazy!');
          return false;
        }
        return true;
      })
      .map((value) => {
        return {...value, lastMod: Date.now()}
      })
      .subscribe((value) => {
        console.log(value)

      })
  }

  serverValidation(control): Observable<any> {
    return this.http.post(Settings.CHECK_TITLE_END_POINT, {title: control.value}).map((resp) => {
      return resp;
    })
  }

  ngOnInit() {
  }

}
