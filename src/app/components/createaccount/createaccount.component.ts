import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Moment } from 'moment';
import * as moment from 'moment';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.scss']
})
export class CreateaccountComponent implements OnInit {

  businessAccount: any = {
    companyName: '', doingBusinessAs: '', foundedDate: '', revenue: '', firstName: '', lastName: '', email: ''
  };

  constructor(private router: Router, private httpClient: HttpClient) {
  }

  localizeValue: any;
  currencySign: string = '';

  ngOnInit(): void {
    this.localizeValue = window.localStorage.getItem('localizeLng') || '';
    if (!this.localizeValue || this.localizeValue == 'undefined') {
      this.localizeValue = { code: 'en', label: 'English', currencyCode: 'USD', locale: 'en-US', exchangeRate: 1, currencySymbol: '$' };
    }
    else {
      this.localizeValue = JSON.parse(window.localStorage.getItem('localizeLng') || '');
    }
    this.currencySign = this.localizeValue.currencySymbol + '&nbsp;';
  }
  openNewAccount() {
    this.httpClient.post('http://localhost:3000/businessAccounts', {
      ...this.businessAccount,
      foundedDate:moment(this.businessAccount.foundedDate, true).toISOString(),
      revenue: (this.businessAccount.revenue / (this.localizeValue.exchangeRate))
    }).subscribe((response: any) => {
      if (!!response && !!response.id) {
        this.router.navigate(['/dashboard']);
      }
    });
  }
}
