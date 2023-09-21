import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

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

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.screenWidth = window.innerWidth;

    this.renderer.listen('body', 'click', (event) => {
      if (
        this.isMobileNavOpen &&
        !this.nav.nativeElement.contains(event.target) &&
        !this.loginBtn.nativeElement.contains(event.target)
      ) {
        this.closeMobileNav();
      }
    });
  }

  openMobileNav() {
    if (this.screenWidth < 1024) {
      this.isMobileNavOpen = !this.isMobileNavOpen;

      if (!this.isMobileNavOpen) {
        this.nav.nativeElement.style.display = 'none';
        this.loginBtn.nativeElement.style.display = 'none';
      } else {
        this.nav.nativeElement.style.display = 'flex';
        this.loginBtn.nativeElement.style.display = 'block';
      }
    }
  }

  closeMobileNav() {
    if (this.screenWidth < 1024) {
      this.isMobileNavOpen = !this.isMobileNavOpen;

      this.nav.nativeElement.style.display = 'none';
      this.loginBtn.nativeElement.style.display = 'none';
    }
  }
}
