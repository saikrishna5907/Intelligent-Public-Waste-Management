import { Injectable } from '@angular/core';
import {Sensor} from './shared/sensor.model';
import { List } from 'lodash';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Bin } from './shared/bins.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MapService {
  sensorData: AngularFireList<Sensor>;
  binData: AngularFireList<Bin>;
  thresholValue:  AngularFireList<number>;
  constructor(private afAuth: AngularFireAuth,
    private afs: AngularFireStorageModule, private afdb: AngularFireDatabase, private http: HttpClient) { }

    getSensorData(): Observable<List<Sensor>> {
      return this.http.get<List<Sensor>>('https://pwms-db.firebaseio.com/Sensors.json');
    }
    getBinsData() {

      return this.http.get<List<Bin>>('https://pwms-db.firebaseio.com/Bins.json');
    }
    getThresholdValue(): Observable<number> {
      return this.http.get<number>('https://pwms-db.firebaseio.com/data/thresholdValue.json');
    }

    setThresholdValue(val: number) {
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
      this.http.put('https://pwms-db.firebaseio.com/data.json', val, httpOptions);
    }
  }
