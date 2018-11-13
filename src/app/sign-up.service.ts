import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { User} from './shared/user.model';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  managers: AngularFireList<User>;
  feedbacks: AngularFireList<String>;
  form = new FormControl({
    $key: new  FormControl(null),
    email: new FormControl(''),
    password: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });
  addManager(manager: User): Observable<User> {
    return this.http.post<User>('https://pwms-db.firebaseio.com/Managers.json', manager);
  }
  deleteManager(id: string): Observable<{}> {
    return this.http.delete('https://pwms-db.firebaseio.com/Managers/' + id + '.json');
  }
  addFeedBack(x: string): void {
    // this.feedbacks = this.afdb.list('data/feedbacks');
    // this.feedbacks.push({
    //   feedBackDescription:  x
    // });
  }
  constructor(private afAuth: AngularFireAuth, private afdb: AngularFireDatabase, private http: HttpClient) { }
}
