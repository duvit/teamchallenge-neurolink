import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentWrapperComponent } from './components/main-content-wrapper/main-content-wrapper.component';
import { RegistrationComponent } from './components/header/registration/registration.component';
import { LoginComponent } from './components/header/login/login.component';
import { UserAgreementComponent } from './components/technical-department/user-agreement/user-agreement.component';
import { PageNotFoundComponent } from './components/technical-department/page-not-found/page-not-found.component';
import { SpecialistPageComponent } from './components/shared/specialist-page/specialist-page.component';
import { UserPageComponent } from './components/shared/user-page/user-page.component';
import { ProfileComponent } from './components/shared/user-page/profile/profile.component';
import { SupportComponent } from './components/shared/user-page/support/support.component';
import { SettingsComponent } from './components/shared/user-page/settings/settings.component';

const routes: Routes = [
  { path: '', component: MainContentWrapperComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'user-page',
    component: UserPageComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: '',
        component: ProfileComponent,
      },
      {
        path: 'support',
        component: SupportComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
    ],
  },

  { path: 'specialist-page/:id', component: SpecialistPageComponent },
  { path: 'user-agreement', component: UserAgreementComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
