import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public authService: AuthService, private route: ActivatedRoute) {}

  @ViewChild('nav', { static: true }) nav!: ElementRef;
  @ViewChild('loginBtn', { static: true }) loginBtn!: ElementRef;

  isMobileNavOpen: boolean = false;

  isUserProfile: boolean = true;

  ngOnInit(): void {
    const urlSegments: UrlSegment[] = this.route.snapshot.url;
    this.isUserProfile = urlSegments
      .map((segment) => segment.path)
      .includes('profile');
  }

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
