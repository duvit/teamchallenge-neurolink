import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserInterface } from '../shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(
    this.getAuthStatuse()
  );

  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  login(form: any) {
    this.http
      .post<UserInterface>('https://mindelink.onrender.com/auth/signin', form)
      .subscribe(
        (response) => {
          console.log('Success', response);
          localStorage.setItem('token', response.token);
          // this.router.navigateByUrl('/');
        },
        (error) => {
          console.error('Error', error);
        }
      );
    this.isAuthenticatedSubject.next(true);
    this.saveAuthStatus(true);
    this.router.navigateByUrl('/');

    // WHEN SERVER WILL WORK - CHANGE LOG STATUS ASYNC
    //  this.http
    //   .post<UserInterface>('https://mindelink.onrender.com/auth/signin', form)
    //   .subscribe(
    //     (response) => {
    //       console.log('Success', response);
    //       localStorage.setItem('token', response.token);
    //       this.isAuthenticatedSubject.next(true); // Переміщено сюди
    //       this.saveAuthStatus(true); // Переміщено сюди
    //       this.router.navigateByUrl('/');
    //     },
    //     (error) => {
    //       console.error('Error', error);
    //     }
    //   );
  }

  logout() {
    localStorage.setItem('token', '');
    this.isAuthenticatedSubject.next(false);
    this.saveAuthStatus(false);
  }

  private saveAuthStatus(status: boolean) {
    localStorage.setItem('isAuthenticated', status.toString());
  }

  private getAuthStatuse(): boolean {
    const storedStatus = localStorage.getItem('isAuthenticated');
    return storedStatus ? JSON.parse(storedStatus) : false;
  }
}
