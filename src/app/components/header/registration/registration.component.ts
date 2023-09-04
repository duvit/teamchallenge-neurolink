import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userSerivce: UserService,
    private http: HttpClient
  ) {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      usersurname: [''],
      userSurname: [''],
      userBirthDate: [''],
      username: ['', Validators.required],
      passwordRepeat: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;

      // Виконати POST-запит з використанням HttpClient
      this.http
        .post('http://134.249.52.201:8080/createUser', formData)
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
