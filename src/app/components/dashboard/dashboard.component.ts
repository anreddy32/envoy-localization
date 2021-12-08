import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  ELEMENT_DATA: any[] = [
  ];
  displayedColumns:string[];
  dataSource :any[];

  constructor(private router:Router, private httpClient: HttpClient) {
    this.displayedColumns = ['companyName', 'foundedDate', 'revenue','firstName'];
    this.dataSource = this.ELEMENT_DATA;
   }

  ngOnInit(): void {
    // this.userService.currentUserDataObject.subscribe((user:any)=>{
    //   debugger;
    //   this.userName = user?.userName || '';
    // })
    // this.userNameTest = $localize`TestName`;
    this.httpClient.get('http://localhost:3000/businessAccounts' ).subscribe((response: any) => {
      if(!!response){
        this.dataSource = this.ELEMENT_DATA = response;
      }
  });
  }

  
}
