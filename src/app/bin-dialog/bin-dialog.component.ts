import { Component, OnInit, Input, Inject } from '@angular/core';
import {MapComponent} from '../map/map.component';
import {MatDialogModule, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {} from '../map/map.component';
@Component({
  selector: 'app-bin-dialog',
  templateUrl: './bin-dialog.component.html',
  styleUrls: ['./bin-dialog.component.css']
})
export class BinDialogComponent implements OnInit {
  // @Input() binDataList: MapComponent;
  constructor(public dialogRef: MatDialogRef<BinDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
  public activeModal: NgbActiveModal) {
    // console.log(this.binDataList);
  }
  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
