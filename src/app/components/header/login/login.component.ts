import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userSerivce: UserService,
    private http: HttpClient
  ) {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;

      const params = new HttpParams()
        .set('email', formData.email)
        .set('password', formData.password);

      // Встановіть заголовки для POST-запиту
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      });

      // Виконайте POST-запит з використанням HttpClient
      this.http
        .post('http://134.249.52.201:8080/login', params.toString(), {
          headers,
        })
        .subscribe(
          (response) => {
            console.log('Success', response);
            // Результат успішного POST-запиту тут
          },
          (error) => {
            console.error('Error', error);
            // Обробка помилки POST-запиту тут
          }
        );
    }
  }
}
