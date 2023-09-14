import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

import { Specialist } from '../shared/types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://134.249.52.201:8080';
  private registrationEndpoint = '/createUser';
  private usersEndpoint = '/psychologist/getAll';
  private loginEndpoint = '/login';

  specialistsList: Specialist[] = [
    {
      id: 1,
      name: 'John',
      surName: 'Doe',
      email: 'john.doe@example.com',
      password: 'password123',
      phone: '+1234567890',
      price: 50,
      location: 'New York',
      online: true,
      offline: false,
      experience: 3,
      rating: 4.5,
      description:
        'I am a skilled professional with 3 years of experience in psychology.',
      categories: ['Clinical Psychology', 'Counseling'],
      photoLink:
        'https://thumbs.dreamstime.com/z/do-you-understand-me-vertical-image-depressed-businessman-talking-psychologist-his-problems-39394557.jpg',
    },
    {
      id: 2,
      name: 'Jane',
      surName: 'Doe',
      email: 'jane.doe@example.com',
      password: 'password456',
      phone: '+0987654321',
      price: 60,
      location: 'Los Angeles',
      online: false,
      offline: true,
      experience: 5,
      rating: 4.8,
      description: 'Experienced psychologist specializing in family therapy.',
      categories: ['Family Therapy', 'Relationship Counseling'],
      photoLink:
        'https://previews.123rf.com/images/pressmaster/pressmaster1302/pressmaster130200273/17883867-vertical-portrait-of-a-successful-psychologist-or-a-businesswoman.jpg',
    },

    {
      id: 3,
      name: 'Sarah',
      surName: 'Smith',
      email: 'sarah.smith@example.com',
      password: 'password789',
      phone: '+1357924680',
      price: 70,
      location: 'Chicago',
      online: true,
      offline: false,
      experience: 4,
      rating: 4.2,
      description: 'Expert in stress management and anxiety disorders.',
      categories: ['Stress Management', 'Anxiety Disorders'],
      photoLink:
        'https://previews.123rf.com/images/dragonimages/dragonimages1703/dragonimages170300675/72845316-vertical-image-of-a-young-professional-psychiatrist-at-therapy-session.jpg',
    },
  ];

  private usersListSubscription: Subscription | undefined;

  // RegistrationInfo: any;
  // User: any;
  // Response: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.usersListSubscription = this.getUsers().subscribe(
      (response: any[]) => {
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
    return this.specialistsList;
  }

  getUsers(): Observable<any[]> {
    const url = `${this.baseUrl}${this.usersEndpoint}`;
    return this.http.get<any[]>(url);
  }

  getSpecialistById(id: number): Specialist {
    return this.specialistsList.find(
      (specialist: Specialist) => specialist.id === id
    )!;
  }
}
