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
  // languageList: any[] = [{ code: 'en', label: 'English', currencyCode: 'USD', locale: 'en-US', exchangeRate: 1, currencySymbol: '$' },
  // { code: 'fr', label: 'French', currencyCode: 'EUR', locale: 'fr-FR', exchangeRate: 0.88842, currencySymbol: '€' },
  // { code: 'de', label: 'German', currencyCode: 'EUR', locale: 'de-DE', exchangeRate: 0.88842, currencySymbol: '€' },
  // { code: 'hi', label: 'Hindi', currencyCode: 'INR', locale: 'en-IN', exchangeRate: 75.409, currencySymbol: '₹' },
  // { code: 'zh-Hans', label: 'Chinese', currencyCode: 'CNY', locale: 'zh_HK', exchangeRate: 6.3674, currencySymbol: '¥' }
  // ] || [];

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
    var localeData = moment.localeData('de');
      var format = localeData.longDateFormat('L');
      debugger;
      var res = moment(moment(this.businessAccount.foundedDate, true).toISOString()).format(format);
      alert(res);
      var res2 = moment(moment(this.businessAccount.foundedDate, true).toISOString()).format(format);
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
