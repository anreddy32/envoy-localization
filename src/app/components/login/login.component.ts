import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  maskUserPassword = true;
  username = new FormControl('', [Validators.required]);
  //forgotPasswordEmail = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  loginForm = new FormGroup({
    username: this.username,
    password: this.password
  });

  //forgotPasswordForm = new FormGroup({
  //  forgotPasswordEmail: this.forgotPasswordEmail
  //});

  constructor() { }

  ngOnInit(): void {
  }

  forgotPasswordFormSubmit() {
  }

  showLoginPanel() { }

  showLoginButtonAsDisabled() {
    return false;
  }

  showForgotPasswordPanel() { }

  loginFormSubmit() { }
}
