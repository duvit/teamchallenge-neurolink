import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentWrapperComponent } from './components/main-content-wrapper/main-content-wrapper.component';
import { RegistrationComponent } from './components/header/registration/registration.component';
import { LoginComponent } from './components/header/login/login.component';
import { UserAgreementComponent } from './components/technical-department/user-agreement/user-agreement.component';
import { PageNotFoundComponent } from './components/technical-department/page-not-found/page-not-found.component';
import { SpecialistPageComponent } from './components/search-block/specialist-page/specialist-page.component';

const routes: Routes = [
  { path: '', component: MainContentWrapperComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'specialist-page/:id', component: SpecialistPageComponent },
  { path: 'user-agreement', component: UserAgreementComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
