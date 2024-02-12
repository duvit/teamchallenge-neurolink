import { AuthService } from './../../../services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { UserInterface } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    roles: [[''], [Validators.required]],
    location: ['', [Validators.required]],
  });

  onSubmit() {
    const rolesArray = [this.form.value.roles];

    const updatedFormValue = { ...this.form.value, roles: rolesArray };

    this.http
      .post<UserInterface>(
        'https://mindelink.onrender.com/auth/signup',
        updatedFormValue
      )
      .subscribe(
        (response) => {
          console.log('Success', response);
          localStorage.setItem('token', response.token);
          // this.authService.login();
          this.router.navigateByUrl('/');
        },
        (error) => {
          console.error('Error', error);
        }
      );

    console.log(this.form.getRawValue());
  }

  // {
  //   "email": "test4@mail.ua",
  //   "password": "123456",
  //   "firstName": "Test",
  //   "lastName": "Test",
  //   "roles": [
  //     "USER"
  //   ],
  //   "location": "KYIV"
  // }
  // formData.roles = [formData.roles];
}
