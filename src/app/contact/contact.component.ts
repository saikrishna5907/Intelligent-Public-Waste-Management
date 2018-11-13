import { Component, OnInit } from '@angular/core';
declare let L;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
mapFuntion() {
  const map = L.map('mapid').setView([-37.721085, 145.047871], 14);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
L.marker([-37.721085, 145.047871]).addTo(map);
const popup = L.popup();
}
  ngOnInit() {
    this.mapFuntion();
  }

}
