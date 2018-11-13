import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/user.model';
import { NgForm } from '@angular/forms';
import { SignUpService } from '../sign-up.service';
import { AngularFireList } from 'angularfire2/database';
export interface Designation {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  managers: User[];
  user: User;
  showAddManager: boolean;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  addManagerSuccess: boolean;
  constructor(public addManagerService: SignUpService, private router: Router) { }
  addManager(email: string, password: string, firstName: string, lastName: string) {
    const manager = new User(
      email,
      password,
      firstName,
      lastName
    );
    this.addManagerService.addManager(manager).subscribe(man => this.managers.push(man));
    this.showAddManager = true;
    setTimeout(() => this.showAddManager = false, 3000);
  }
  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
    form.reset();
    this.user = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    };
  }

  }

}
