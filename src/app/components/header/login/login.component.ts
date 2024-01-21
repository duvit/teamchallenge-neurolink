import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { UserInterface } from 'src/app/shared/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit() {
    this.http
      .post<UserInterface>(
        'https://mindelink.onrender.com/auth/signin',
        this.form.getRawValue()
      )
      .subscribe(
        (response) => {
          console.log('Success', response);
          localStorage.setItem('token', response.token);
          this.authService.currentUserSig.set(response);
          this.router.navigateByUrl('/');
        },
        (error) => {
          console.error('Error', error);
        }
      );
  }
}
