import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //@ViewChild('matMenuTrigger') trigger: MatMenuTrigger;
  siteLanguage: string = 'English';
  siteLocale: string = '';
  languageList:any[]= [{ code: 'en', label: 'English' }, { code: 'fr', label: 'French' }, { code: 'de', label: 'German' }] || [];

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

  constructor(private router:Router, private userService:UserService) { }

  ngOnInit(): void {
    debugger;
    this.siteLocale = window.location.pathname.split('/')[1].toLowerCase();
    this.siteLanguage = this.languageList ?.find(f => f.code === this.siteLocale)?.label;
  }

  forgotPasswordFormSubmit() {
  }

  showLoginPanel() { }

  showLoginButtonAsDisabled() {
    return false;
  }

  showForgotPasswordPanel() { }

  loginFormSubmit() {
    if(this.loginForm.get('username')!.value === this.loginForm.get('password')!.value){
      this.userService.updateUserDataObject({userName:this.loginForm.get('username')!.value});
      this.router.navigate(['/dashboard']);
    }
  }
}
