import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AngularFireList } from 'angularfire2/database';
import { User } from '../shared/user.model';
import * as firebase from 'firebase/app';
import { searchManager } from '../../script.js';
import { LoginAuthenticationService } from '../login-authentication.service';
import { List } from 'lodash';
import { Manager } from '../shared/manager.model';
export interface Designation {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  designations: Designation[] = [
    { value: 'manager', viewValue: 'Manager' },
    { value: 'admin', viewValue: 'Admin' }
  ];
  managerFound: boolean;
  adminDataArray: any;
  managersData: List<User>;
  email: string;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  constructor(
    private loginAuth: LoginAuthenticationService,
    private router: Router
  ) {}
  login(email: String, pass: String, role: String) {
    if (role === 'admin') {
      if (this.adminDataArray.email === email && this.adminDataArray.password === pass) {
        this.router.navigate(['adminPage']);
        this.loginAuth.loggedIn = true;
      } else {
        window.alert('Invalid Details!');
      }
    } else if (role === 'manager') {
      const keys = Object.keys(this.managersData);
      for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
      if (this.managersData[k].email === email && this.managersData[k].password === pass) {
        this.router.navigate(['managerPage']);
        this.managerFound = true;
        this.loginAuth.loggedIn = true;
        break;
      } else {
        this.managerFound = false;
      }
    }
    if (this.managerFound === false) {
      window.alert('Invalid Details!');
    }
    }
  }
  ngOnInit() {
    // this.loginAuth.getAdmin().subscribe(list => {
    //   this.adminDataArray = list.map(item => {
    //     return item.payload.val();
    //   });
    // });
    // this.loginAuth.getManagers().subscribe(list => {
    //   this.managersData = list.map(item => {
    //     return {
    //       $key: item.key,
    //       ...item.payload.val()
    //     };
    //   });
    // });
    this.loginAuth.getAdmin()
    .subscribe(data => this.adminDataArray = data);
    this.loginAuth.getManagers()
    .subscribe(data => this.managersData = data);
  }
}
