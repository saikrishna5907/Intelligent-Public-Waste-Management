import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { Router } from '@angular/router';
import { AngularFireAuth} from 'angularfire2/auth';
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  name: any;
  state: String = '';
  constructor(public af: AngularFireAuth, private router: Router) {
    this.af.auth.onAuthStateChanged(auth => {
      if (auth) {
        this.name = auth;
      }
    });

  }
  logout() {
   this.af.auth.signOut();
    console.log('logged out');
    this.router.navigateByUrl('/login');
 }


  ngOnInit() {
  }

}
