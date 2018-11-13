import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AuthGuard } from './authGuard.service';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MatInputModule, MatMenuModule, MatIconModule, MatButtonModule, MatCardModule, MatFormFieldModule } from '@angular/material';
import {MatSelectModule, MatTabsModule, MatSliderModule, MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';
import {MatDialogModule} from '@angular/material';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule  } from 'angularfire2/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import {NgbModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { NotifierModule, NotifierOptions } from 'angular-notifier';

import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MapComponent } from './map/map.component';
import { ForCitiesComponent } from './for-cities/for-cities.component';

import {environment } from '../environments/environment';
import {LoginAuthenticationService} from './login-authentication.service';
import {SignUpService} from './sign-up.service';
import { MangerPageComponent } from './manger-page/manger-page.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderForhomeComponent } from './header-forhome/header-forhome.component';
import { HeaderForMainPageComponent } from './header-for-main-page/header-for-main-page.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BinDialogComponent } from './bin-dialog/bin-dialog.component';
import { DeleteManagerComponent } from './delete-manager/delete-manager.component';
const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'right',
      distance: 12
    },
vertical: {
position: 'bottom',
distance: 12,
gap: 10
}
},
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};
@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    MainPageComponent,
    AdminPageComponent,
    SignUpComponent,
    MapComponent,
    ForCitiesComponent,
    MangerPageComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    HeaderForhomeComponent,
    HeaderForMainPageComponent,
    BinDialogComponent,
    DeleteManagerComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NotifierModule.withConfig(),
    BrowserAnimationsModule,
    ReactiveFormsModule ,
    AngularFireModule.initializeApp(environment.fireBaseConfig),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    MatFormFieldModule,
    MatMenuModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatSliderModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatTabsModule,
    routes,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
  ],
  entryComponents: [
    BinDialogComponent
  ],
  providers: [LoginAuthenticationService, SignUpService, AuthGuard, NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
