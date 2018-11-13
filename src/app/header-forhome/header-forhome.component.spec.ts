import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderForhomeComponent } from './header-forhome.component';

describe('HeaderForhomeComponent', () => {
  let component: HeaderForhomeComponent;
  let fixture: ComponentFixture<HeaderForhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderForhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderForhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
