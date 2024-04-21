import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, UrlSegment } from '@angular/router';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  @ViewChild('nav', { static: true }) nav!: ElementRef;
  @ViewChild('loginBtn', { static: true }) loginBtn!: ElementRef;

  isMobileNavOpen: boolean = false;
  isUserProfile: boolean = true;

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentPageUrl = event.urlAfterRedirects;
        console.log(currentPageUrl);
        if (currentPageUrl === '/user-page') {
          this.isUserProfile = true;
        } else {
          this.isUserProfile = false;
        }
      }
    });
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
