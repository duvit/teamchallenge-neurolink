import {
  Component,
  ElementRef,
  ViewChild,
  Renderer2,
  Inject,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  @ViewChild('nav', { static: true }) nav!: ElementRef;
  @ViewChild('loginBtn', { static: true }) loginBtn!: ElementRef;

  isMobileNavOpen: boolean = false;

  mobileNav() {
    this.isMobileNavOpen = !this.isMobileNavOpen;
    if (this.isMobileNavOpen) {
      this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
    } else {
      this.renderer.setStyle(this.document.body, 'overflow', 'visible');
    }
  }
}
