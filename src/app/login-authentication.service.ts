import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';
import {AngularFireList} from 'angularfire2/database';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { User} from './shared/user.model';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { AngularFireStorageModule } from 'angularfire2/storage';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { Manager } from './shared/manager.model';
import { List } from 'lodash';
@Injectable({
  providedIn: 'root'
})


export class LoginAuthenticationService {
  loggedIn: boolean;
  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFireStorageModule, private afdb: AngularFireDatabase,
              private http: HttpClient) {
  }
getAdmin() {
  return this.http.get('https://pwms-db.firebaseio.com/admin.json');
}
getManagers(): Observable<List<User>> {
  // this.managers = this.afdb.list('Managers');
  // return this.managers.snapshotChanges();
  return this.http.get<List<User>>('https://pwms-db.firebaseio.com/Managers.json');
}
isLoggedIn() {
return this.loggedIn;
}
ngOninit() {
}
}
