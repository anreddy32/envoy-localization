import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-banner',
  templateUrl: './header_banner.component.html',
  styleUrls: ['./header_banner.component.scss']
})
export class HeaderBannerComponent implements OnInit {
  userName: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userName = window.localStorage.getItem('localize_UserName') || '';
  }

  logout() {
    this.router.navigate(['/login']);
  }

  createAccount() {
    this.router.navigate(['/createAccount']);
  }

  accountsList() {
    this.router.navigate(['/dashboard']);
  }
}
