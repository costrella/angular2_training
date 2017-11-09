import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {

  constructor(private authService : AuthService) {
  }

  ngOnInit() {
  }

  sendForm(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
    } else {
      console.warn('form invalid');
    }
    this.authService.logIn(form);

  }

  logOut(){
    this.authService.logOut();
  }

}
