import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentWrapperComponent } from './components/main-content-wrapper/main-content-wrapper.component';
import { RegistrationComponent } from './components/header/registration/registration.component';
import { LoginComponent } from './components/header/login/login.component';

const routes: Routes = [
  { path: '', component: MainContentWrapperComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
