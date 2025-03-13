import { Component, HostBinding, HostListener, Inject } from '@angular/core';
import { DOCUMENT, NgIf } from '@angular/common';
import { FooterComponent } from './components/footer.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [HeaderComponent, RouterOutlet, FooterComponent, NgIf]
})
export class AppComponent {
  title = 'natsoft';
  //@HostBinding('class') componentCssClass: any = 'dark';
  showButton = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const yOffSet = window.scrollY;
    const scrollTop = this.document.documentElement.scrollTop;
    this.showButton = (yOffSet || scrollTop) > 500;
  }

  onScrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }
}
