import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

import { Specialist } from '../shared/types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://134.249.52.201:443';
  private registrationEndpoint = '/createUser';
  private usersEndpoint = '/psychologist/getAll';
  private loginEndpoint = '/login';

  specialistsList!: Specialist[];

  private usersListSubscription: Subscription | undefined;

  // RegistrationInfo: any;
  // User: any;
  // Response: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log('load');
    this.usersListSubscription = this.getSpecialists().subscribe(
      (response: Specialist[]) => {
        this.specialistsList = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  loginUser() {
    const url = `${this.baseUrl}${this.loginEndpoint}`;
    // return this.http.post(url);
  }

  registerUser() {
    const url = `${this.baseUrl}${this.registrationEndpoint}`;
    // return this.http.post(url);
  }

  getMockSpecialists(): Specialist[] {
    return this.specialistsMockList;
  }

  getSpecialists(): Observable<any[]> {
    const url = `${this.baseUrl}${this.usersEndpoint}`;
    return this.http.get<any[]>(url);
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

  specialistsMockList: Specialist[] = [
    {
      id: 1,
      name: 'Іван',
      surName: 'Доу',
      email: 'john.doe@example.com',
      password: 'password123',
      phone: '+1234567890',
      price: 50,
      location: 'Нью-Йорк',
      online: true,
      offline: false,
      experience: 3,
      rating: 4.5,
      description: 'Я вправний професіонал з 3-річним досвідом у психології.',
      categories: ['Клінічна Психологія', 'Консультування'],
      areas: [
        'Самооцінка',
        'Почуття самотності',
        'Стрес',
        'Боротьба з агресією',
        'Апатія',
      ],
      photoLink:
        'https://thumbs.dreamstime.com/z/do-you-understand-me-vertical-image-depressed-businessman-talking-psychologist-his-problems-39394557.jpg',
    },
    {
      id: 2,
      name: 'Джейн',
      surName: 'Доу',
      email: 'jane.doe@example.com',
      password: 'password456',
      phone: '+0987654321',
      price: 60,
      location: 'Лос-Анджелес',
      online: false,
      offline: true,
      experience: 5,
      rating: 4.8,
      description: 'Досвідчений психолог, спеціалізується на сімейній терапії.',
      categories: ['Сімейна Терапія', "Консультування З Сім'єю"],
      areas: [
        'Самооцінка',
        'Почуття самотності',
        'Стрес',
        'Боротьба з агресією',
        'Апатія',
      ],
      photoLink:
        'https://previews.123rf.com/images/pressmaster/pressmaster1302/pressmaster130200273/17883867-vertical-portrait-of-a-successful-psychologist-or-a-businesswoman.jpg',
    },

    {
      id: 3,
      name: 'Сара',
      surName: 'Сміт',
      email: 'sarah.smith@example.com',
      password: 'password789',
      phone: '+1357924680',
      price: 70,
      location: 'Чикаго',
      online: true,
      offline: false,
      experience: 4,
      rating: 4.2,
      description: 'Експерт з управління стресом та тривожними розладами.',
      categories: ['Управління Стресом', 'Тривожні Розлади'],
      areas: [
        'Самооцінка',
        'Почуття самотності',
        'Стрес',
        'Боротьба з агресією',
        'Апатія',
      ],
      photoLink:
        'https://previews.123rf.com/images/dragonimages/dragonimages1703/dragonimages170300675/72845316-vertical-image-of-a-young-professional-psychiatrist-at-therapy-session.jpg',
    },
  ];
}
