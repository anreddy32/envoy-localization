import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.scss']
})
export class CreateaccountComponent implements OnInit {
  businessAccount: any = {
    companyName: '', doingBusinessAs: '', foundedDate: '', revenue: '', firstName: '', lastName: '', email: ''
  };

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  openNewAccount() {
    
  }
}
