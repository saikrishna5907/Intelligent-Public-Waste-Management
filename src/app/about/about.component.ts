import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../sign-up.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private service: SignUpService) { }
submitForm( feedBack: string) {
  this.service.addFeedBack(feedBack);
}
  ngOnInit() {
  }

}
