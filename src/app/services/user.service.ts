import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

import { Specialist } from '../shared/types';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnInit {
  private baseUrl = 'https://mindelink.onrender.com';
  private specialistUrl =
    'https://mindelink.onrender.com/api/psychologist/get';
  private registrationEndpoint = '/createUser';
  private usersEndpoint =
    'api/psychologist/all?location=ALL&priceMin=0&priceMax=99999&ratingMin=0&ratingMax=5&experienceMin=0&experienceMax=99';
  private loginEndpoint = '/login';

  private apiUrl =
    'https://mindelink.onrender.com/api/psychologist/all?location=ALL&priceMin=0&priceMax=99999&ratingMin=0&ratingMax=5&experienceMin=0&experienceMax=99';

  specialistsList!: Specialist[];
  subscription: Subscription = new Subscription();

  private usersListSubscription: Subscription | undefined;

  // RegistrationInfo: any;
  // User: any;
  // Response: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.getUsers();
  }

  getUsers(): Observable<any> {
    const queryParams = {
      location: 'ALL',
      priceMin: 0,
      priceMax: 99999,
      ratingMin: 0,
      ratingMax: 5,
      experienceMin: 0,
      experienceMax: 99,
    };

    return this.http.get<any>(
      'https://mindelink.onrender.com/api/psychologist/all',
      { params: queryParams }
    );
  }

  getUserById(userId: string): Observable<any> {
    const url = `${this.baseUrl}${userId}`;
    return this.http.get<any>(url);
  }

  getSpecialist(id: number): Observable<Specialist> {
    const url = `${this.specialistUrl}/${id}`;

    return this.http.get<Specialist>(url);
  }

  loginUser() {
    const url = `${this.baseUrl}${this.loginEndpoint}`;
    // return this.http.post(url);
  }

  registerUser() {
    const url = `${this.baseUrl}${this.registrationEndpoint}`;
    // return this.http.post(url);
  }

  getSpecialists(): Observable<Specialist[]> {
    const url = `${this.baseUrl}${this.usersEndpoint}`;
    return this.http.get<Specialist[]>(url);
  }

  getSpecialistById(id: number): Specialist {
    return this.specialistsList.find((specialist) => specialist.id === id)!;
  }

  getFilteredItems(filterParams: any): Observable<Specialist[]> {
    let params = new HttpParams();
    const url = `${this.baseUrl}${this.usersEndpoint}`;

    // Додайте параметри фільтрації до запиту
    for (const key in filterParams) {
      if (filterParams[key] !== null) {
        params = params.append(key, filterParams[key]);
        console.log(filterParams[key]);
      }
    }

    console.log(url, { params });
    return this.http.get<Specialist[]>(url, { params });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  //   specialistsMockList: Specialist[] = [
  //     {
  //       id: 1,
  //       firstName: 'Іван',
  //       lastName: 'Доу',
  //       email: 'john.doe@example.com',

  //       phone: '+1234567890',
  //       price: 50,
  //       location: 'Нью-Йорк',
  //       online: true,
  //       offline: false,
  //       experience: 3,
  //       rating: 4.5,
  //       description: 'Я вправний професіонал з 3-річним досвідом у психології.',
  //       categories: ['Клінічна Психологія', 'Консультування'],
  //       areas: [
  //         'Самооцінка',
  //         'Почуття самотності',
  //         'Стрес',
  //         'Боротьба з агресією',
  //         'Апатія',
  //       ],
  //       photoLink:
  //         'https://thumbs.dreamstime.com/z/do-you-understand-me-vertical-image-depressed-businessman-talking-psychologist-his-problems-39394557.jpg',
  //     },
  //     {
  //       id: 2,
  //       firstName: 'Джейн',
  //       lastName: 'Доу',
  //       email: 'jane.doe@example.com',
  //       phone: '+1234567890',
  //       price: 50,
  //       location: 'Нью-Йорк',
  //       online: true,
  //       offline: false,
  //       experience: 3,
  //       rating: 4.5,
  //       description: 'Я вправний професіонал з 3-річним досвідом у психології.',
  //       categories: ['Клінічна Психологія', 'Консультування'],
  //       areas: [
  //         'Самооцінка',
  //         'Почуття самотності',
  //         'Стрес',
  //         'Боротьба з агресією',
  //         'Апатія',
  //       ],
  //       photoLink:
  //         'https://previews.123rf.com/images/pressmaster/pressmaster1302/pressmaster130200273/17883867-vertical-portrait-of-a-successful-psychologist-or-a-businesswoman.jpg',
  //     },

  //     {
  //       id: 3,
  //       firstName: 'Сара',
  //       lastName: 'Сміт',
  //       email: 'sarah.smith@example.com',

  //       location: 'Чикаго',
  //       online: true,
  //       offline: false,
  //       experience: 4,
  //       rating: 4.2,
  //       description: 'Експерт з управління стресом та тривожними розладами.',
  //       categories: ['Управління Стресом', 'Тривожні Розлади'],
  //       areas: [
  //         'Самооцінка',
  //         'Почуття самотності',
  //         'Стрес',
  //         'Боротьба з агресією',
  //         'Апатія',
  //       ],
  //       photoLink:
  //         'https://previews.123rf.com/images/dragonimages/dragonimages1703/dragonimages170300675/72845316-vertical-image-of-a-young-professional-psychiatrist-at-therapy-session.jpg',
  //     },
  //   ];
}
