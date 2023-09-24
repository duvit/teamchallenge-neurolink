import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('nav', { static: true }) nav!: ElementRef;
  @ViewChild('loginBtn', { static: true }) loginBtn!: ElementRef;

  isMobileNavOpen = false;

  screenWidth: any;

  openMobileNav() {
    this.isMobileNavOpen = !this.isMobileNavOpen;

    if (!this.isMobileNavOpen) {
      this.nav.nativeElement.style.display = 'none';
      this.loginBtn.nativeElement.style.display = 'none';
      console.log('open');
    } else {
      this.nav.nativeElement.style.display = 'flex';
      this.loginBtn.nativeElement.style.display = 'block';
    }
  }

  closeMobileNav() {
    this.isMobileNavOpen = !this.isMobileNavOpen;

    this.nav.nativeElement.style.display = 'none';
    this.loginBtn.nativeElement.style.display = 'none';
    console.log('close');
  }
}
