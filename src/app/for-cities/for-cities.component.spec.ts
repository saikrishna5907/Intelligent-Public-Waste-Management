import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForCitiesComponent } from './for-cities.component';

describe('ForCitiesComponent', () => {
  let component: ForCitiesComponent;
  let fixture: ComponentFixture<ForCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForCitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
