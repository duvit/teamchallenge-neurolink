import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild, Inject } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  authService = Inject(AuthService);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<UserInterface>().subscribe(response) => {
      console.log('response', response); 
      this.authService.currentUserSig.set(response)
    }
  }

  @ViewChild('nav', { static: true }) nav!: ElementRef;
  @ViewChild('loginBtn', { static: true }) loginBtn!: ElementRef;

  isMobileNavOpen: boolean = false;

  mobileNav() {
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }

  closeMobileNav() {
    this.isMobileNavOpen = false;
  }
}
