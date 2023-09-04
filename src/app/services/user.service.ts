import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://134.249.52.201:8080';
  private registrationEndpoint = '/createUser';
  private usersEndpoint = '/getUsers';
  private loginEndpoint = '/login';

  // RegistrationInfo: any;
  // User: any;
  // Response: any;

  constructor(private http: HttpClient) {}

  loginUser() {
    const url = `${this.baseUrl}${this.loginEndpoint}`;
    // return this.http.post(url);
  }

  registerUser() {
    const url = `${this.baseUrl}${this.registrationEndpoint}`;
    // return this.http.post(url);
  }

  getUsers(): Observable<any[]> {
    const url = `${this.baseUrl}${this.usersEndpoint}`;
    return this.http.get<any[]>(url);
  }
}
