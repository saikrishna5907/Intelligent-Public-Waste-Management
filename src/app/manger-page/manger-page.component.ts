import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manger-page',
  templateUrl: './manger-page.component.html',
  styleUrls: ['./manger-page.component.css']
})
export class MangerPageComponent implements OnInit {

  constructor(public af: AngularFireAuth, private router: Router) { }
  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }
    return value;
  }
  logout() {
    this.af.auth.signOut();
     console.log('logged out');
     this.router.navigateByUrl('/login');
  }
  ngOnInit() {
  }

}
