import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangerPageComponent } from './manger-page.component';

describe('MangerPageComponent', () => {
  let component: MangerPageComponent;
  let fixture: ComponentFixture<MangerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
