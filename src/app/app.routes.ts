import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './authGuard.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ForCitiesComponent } from './for-cities/for-cities.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { MangerPageComponent } from './manger-page/manger-page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DeleteManagerComponent } from './delete-manager/delete-manager.component';
export const router: Routes = [
{
  path: '',
  component: MainPageComponent
  },
  {
     path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signUp',
    component: SignUpComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'forCities',
    component: ForCitiesComponent
  },
  {
    path: 'adminPage',
    component: AdminPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'deleteManager',
    component: DeleteManagerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'managerPage',
    component: MangerPageComponent,
    canActivate: [AuthGuard]
    // canActivate: [AuthGuard]
  },
  {
    path: 'adminPage/signUp',
    component: SignUpComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];
export const routes: ModuleWithProviders = RouterModule.forRoot(router);
