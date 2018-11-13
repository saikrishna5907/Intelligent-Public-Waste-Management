
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderForMainPageComponent } from './header-for-main-page.component';

describe('HeaderForMainPageComponent', () => {
  let component: HeaderForMainPageComponent;
  let fixture: ComponentFixture<HeaderForMainPageComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [HeaderForMainPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderForMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
