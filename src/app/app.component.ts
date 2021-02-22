import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';
import { BusyService } from './_services/busy.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'admin-panel-app';

  // constructor(private busyService: BusyService) {    
  // }
  
  // ngOnInit(){
  //   this.busyService.busy();
    
  //   setTimeout(() => {
  //     this.busyService.ideal();
  //   }, 1000);
  // }

  users:any;

  constructor(private accountService: AccountService){}

  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user')!);    
    if(user) {
      this.accountService.setCurrentUser(user);      
    }    
  } 
}
