import { Component,HostBinding } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    standalone: true,
    imports: [RouterLink, RouterLinkActive, NgClass, NgIf]
})
export class HeaderComponent {
  isBurgerOpen = false;
  isMenuOpen = false;

  toggleMenu() {
    this.isBurgerOpen = !this.isBurgerOpen;
    this.isMenuOpen = !this.isMenuOpen;
  }

  theme() {
    document.body.classList.toggle('dark')
  }

}
