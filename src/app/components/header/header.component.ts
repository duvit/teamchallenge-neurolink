import { Component, ElementRef, ViewChild } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public authService: AuthService) {}

  @ViewChild('nav', { static: true }) nav!: ElementRef;
  @ViewChild('loginBtn', { static: true }) loginBtn!: ElementRef;

  isMobileNavOpen: boolean = false;

  mobileNav() {
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }

  closeMobileNav() {
    this.isMobileNavOpen = false;
  }

  logout() {
    this.authService.logout();
  }
}
