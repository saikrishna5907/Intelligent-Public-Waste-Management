import { Component, OnInit } from '@angular/core';
import {LoginAuthenticationService} from '../login-authentication.service';
import { Router } from '@angular/router';
import { List } from 'lodash';
import { User } from '../shared/user.model';
import { SignUpService } from '../sign-up.service';
import { AngularFireList } from 'angularfire2/database';
@Component({
  selector: 'app-delete-manager',
  templateUrl: './delete-manager.component.html',
  styleUrls: ['./delete-manager.component.css']
})
export class DeleteManagerComponent implements OnInit {
  showDeleteManager: boolean;
  managersData: List<User>;
  managers: User[];
  keys: string[];
  constructor(private service: LoginAuthenticationService, private router: Router, private deleteService: SignUpService) {}

  onDelete(id: string) {
    if (confirm('Are you sure to delete this manager ?')) {
      this.deleteService.deleteManager(id).subscribe((data) => {
      });
      this.showDeleteManager = true;
      this.refresh();
      setTimeout(() => this.showDeleteManager = false, 3000);
    }
  }
  ngOnInit() {
    this.refresh();
  }
  refresh() {
    this.service.getManagers()
    .subscribe(data => {
      this.managersData = data;
      this.keys = Object.keys(this.managersData);
    });
  }

}
