import { Injectable, signal } from '@angular/core';
import { UserInterface } from '../shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  currentUserSig = signal<UserInterface | undefined | null>(undefined);
}
