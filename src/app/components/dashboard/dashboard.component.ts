import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userName:string='';
  userNameTest:string='';
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.userService.currentUserDataObject.subscribe((user:any)=>{
      debugger;
      this.userName = user?.userName || '';
    })
    this.userNameTest = $localize`TestName`;
  }

  logout(){
    this.userService.updateUserDataObject({});
    this.router.navigate(['/login']);
  }

  createAccount(){
    this.router.navigate(['/createAccount']);
  }
}
