import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  locale:string = 'en-US';
  currencySign:string = '';
  ELEMENT_DATA: any[] = [
  ];
  displayedColumns:string[];
  dataSource :any[];

  constructor(private router:Router, private httpClient: HttpClient) {
    this.displayedColumns = ['companyName', 'foundedDate', 'revenue','firstName'];
    this.dataSource = this.ELEMENT_DATA;
   }

  ngOnInit(): void {
    let localizeValue:any = window.localStorage.getItem('localizeLng') || '';
    if (!localizeValue || localizeValue == 'undefined') {
      localizeValue = { code: 'en', label: 'English', currencyCode: 'USD', locale: 'en-US', exchangeRate: 1, currencySymbol: '$' };
    }
    else {
      localizeValue = JSON.parse(window.localStorage.getItem('localizeLng') || '');
    }
    
    this.locale = localizeValue.locale.replace('en-IN','hi_IN');
    this.currencySign = localizeValue.currencySymbol;

    this.httpClient.get('http://localhost:3000/businessAccounts' ).subscribe((response: any) => {
      if(!!response){
        this.dataSource = this.ELEMENT_DATA = response;
      }
  });
  }

  
}
