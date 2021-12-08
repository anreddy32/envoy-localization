import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  siteLanguage: string = 'English';
  siteLocale: string = '';
  languageList: any[] = [{ code: 'en', label: 'English', currencyCode: 'USD', locale: 'en-US',exchangeRate:1, currencySymbol:'$' },
  { code: 'fr', label: 'French', currencyCode: 'EUR', locale: 'fr-FR',exchangeRate:0.88842, currencySymbol:'€' }, 
  { code: 'de', label: 'German', currencyCode: 'EUR', locale: 'de-DE',exchangeRate:0.88842, currencySymbol:'€' },
  { code: 'hi', label: 'Hindi', currencyCode:'INR',locale:'en-IN',exchangeRate:75.409, currencySymbol:'₹' },
  { code: 'zh-Hans', label: 'Chinese', currencyCode:'CNY',locale:'zh_HK', exchangeRate:6.3674, currencySymbol:'¥' }   
] || [];

  maskUserPassword = true;
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  loginForm = new FormGroup({
    username: this.username,
    password: this.password
  });

  constructor(private router: Router, private httpClient: HttpClient, private dateAdapter:DateAdapter<any>) { }
  ngOnInit(): void {
    this.siteLocale = window.location.pathname.split('/')[1];
    this.siteLanguage = this.languageList ?.find(f => f.code === this.siteLocale) ?.label;
    this.dateAdapter.setLocale(this.siteLocale);
    window.localStorage.setItem('localizeLng' ,JSON.stringify(this.languageList ?.find(f => f.code === this.siteLocale)));
    
  }

  forgotPasswordFormSubmit() {
  }

  showLoginPanel() { }

  showLoginButtonAsDisabled() {
    return false;
  }

  showForgotPasswordPanel() { }

  loginFormSubmit() {
    if (this.loginForm.get('username')!.value === this.loginForm.get('password')!.value) {
      this.httpClient.get('http://localhost:3000/users').subscribe((users: any) => {
        if (!!users && !!users.find((u: any) => u.userName === this.loginForm.get('username')!.value &&
          u.password === this.loginForm.get('password')!.value)) {
            window.localStorage.setItem('localize_UserName' ,this.loginForm.get('username')!.value);
          this.router.navigate(['/dashboard']);
        }
      });
    }
  }
}
