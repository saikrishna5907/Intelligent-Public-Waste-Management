import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinDialogComponent } from './bin-dialog.component';

describe('BinDialogComponent', () => {
  let component: BinDialogComponent;
  let fixture: ComponentFixture<BinDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinDialogComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(BinDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
