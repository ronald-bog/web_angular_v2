import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';

declare let Prism: any;

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  standalone: true,
  imports: []
})
export default class CodeComponent {
  private location = inject(Location)
  endpoint: string = '';
  html: string = '';
  type: string = '';

  code = [
    {'header.component.html':`
<header>
  <a href="">
    <div class="logo">
    </div>
  </a>
  <nav>
    <ul>
      <li>
        <a routerLink="/galeria">Galeria</a>
      </li>
      <li class="sep">|</li>
      <li *ngIf="session">
        <a routerLink="/catalog">Catálogo</a>
      </li>
      <li *ngIf="session" class="sep">|</li>
      <li *ngIf="session">
        <select>
          <option value="" disabled selected>Razas</option>
          <option value="beagle">Beagle</option>
          <option value="cocker">Cocker Spaniel</option>
          <option value="shiba">Shiba Inu</option>
          <option value="other">Other</option>
          <option value="cat">Cats</option>
        </select>
      </li>
      <li *ngIf="session" class="sep">|</li>
      <li *ngIf="!session">
        <a routerLink="/register">Registrarse</a>
      </li>
      <li *ngIf="!session" class="sep">|</li>
      <li>
        <a routerLink="/contact">Contáctanos</a>
      </li>
    </ul>
  </nav>
  <div (click)="changeTheme()" class="theme"></div>
  <button *ngIf="!session" type="submit" routerLink="/login">LOGIN</button>
  <button *ngIf="session" class="logout" type="submit" (click)="logout()">Cerrar Sesión</button>

  <div (click)="toggleMenu()" [ngClass]="{ 'abierto': isBurgerOpen}" class="burger">
    <div class="barra superior"></div>
    <div class="barra media"></div>
    <div class="barra inferior"></div>
  </div>
</header>

<menu [ngClass]="{ 'abierto': isMenuOpen }">
  <nav>
    <button *ngIf="!session" type="submit" routerLink="/login" (click)="toggleMenu()">LOGIN</button>
    <button *ngIf="session" class="logout" type="submit">Cerrar Sesión</button>
    <hr>
    <a class="nav-link" routerLink="/galeria" (click)="toggleMenu()">Galeria</a>
    <hr>
    <a class="nav-link" *ngIf="session" routerLink="/catalog" (click)="toggleMenu()">Catalogo</a>
    <hr *ngIf="session">
    <select *ngIf="session">
      <option value="" disabled selected>Razas</option>
      <option value="beagle">Beagle</option>
      <option value="cocker">Cocker Spaniel</option>
      <option value="shiba">Shiba Inu</option>
      <option value="other">Other</option>
      <option value="cat">Cats</option>
    </select>
    <hr *ngIf="session">
    <a *ngIf="!session" class="nav-link" routerLink="/register" (click)="toggleMenu()">Registrarse</a>
    <hr *ngIf="!session">
    <a class="nav-link" routerLink="/contact" (click)="toggleMenu()">Contáctanos</a>
    <hr>
  </nav>
</menu>

<div class="bar">
  <ul class="nav-links">
    <li *ngIf="bar[0]"><a>{{title}}</a> </li>
    <li *ngIf="bar[1]"><a class="sep">|</a></li>
    <li *ngIf="bar[1]">
      <select id="organizar" (change)="onSeleccionarOrden($event)">
        <option value="" disabled selected>Organizar por</option>
        <option value="recientes">Recientes</option>
        <option value="antiguos">Antiguos</option>
      </select>
    </li>
    <li *ngIf="bar[2]"><a class="sep">|</a></li>
    <li *ngIf="bar[2]"><a>{{prueba}}</a> </li>
  </ul>
</div>`, 'type': "html"
    },
    {'styles.scss':
`
$black: #2c2c2c;
$brown: #a25843;
$brownH: #dd8d54;
$colW: white;
$colBT: black;
$colG: #dadada;
$home1: '/assets/front1.jpg';
$home2: '/assets/front2.jpg';
$home3: '/assets/front3.jpg';
$logoL: '/assets/logo_L.svg';
$logoD: '/assets/logo_D.svg';
$themeL: '/assets/icons/moon.svg';
$themeD: '/assets/icons/sun.svg';
$userL: '/assets/icons/userD.svg';
$userD: '/assets/icons/user.svg';
$keyL: '/assets/icons/keyD.svg';
$keyD: '/assets/icons/key.svg';
$mailL: '/assets/icons/mailD.svg';
$mailD: '/assets/icons/mail.svg';
$listL: '/assets/icons/listD.svg';
$listD: '/assets/icons/list.svg';
$exclamation: '/assets/icons/exclamation.svg';
$xmark: '/assets/icons/xmark.svg';
$like: '/assets/icons/like.svg';
$unlike: '/assets/icons/unlike.svg';
$visits: '/assets/icons/visits.svg';

@mixin m1366 {
  @media (min-width: 1360px) {
    @content
  }
};

@mixin m720 {
  @media (min-width: 720px) {
    @content
  }
};

@font-face {
  font-family: "ubuntu";
  src: url('../src/assets/fonts/Ubuntu-Regular.ttf');
}

* {
  margin: 0;
  box-sizing: border-box;
  font-family: 'ubuntu';
}

html {
  scroll-behavior: smooth;
}

body {
  position: relative;
  min-height: 100vh;
  padding-bottom: 12em;
}

//theme dark
.dark {
  background: $colBT;
  color: $colW;

  header {
    background-color: $colBT;

    .logo {
      background-image: url('#{$logoD}');
    }

    nav {
      li {
        select {
          background-color: $colBT;
          color: $colW;

          option {
            color: $colW;
          }
        }

        a {
          color: $colW;
        }

        :hover {
          color: $brown;
        }
      }

      .sep {
        color: $brown;
      }
    }

    .theme {
      background-image: url('#{$themeD}');
    }
  }
}

.buttonUP {
  position: fixed;
  bottom: 20px;
  right: 30px;
  width: 60px;
  z-index: 999;

  &:hover {
    filter: opacity(0.8);
  }
}

@import 'scss/header';
@import 'scss/home';
@import 'scss/footer';`,'type': "css"
    },
    {'_header.scss':`
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.25em;
  padding: 0 .5em;

  @include m1366 {
    padding: 0 6em;
  }

  .logo {
    width: 150px;
    height: 85px;
    background-image: url('#{$logoL}');
    background-repeat: no-repeat;
    background-position: center left;
  }

  nav {
    display: none;

    @include m1366 {
      display: flex;
      list-style: none;

      li {
        display: inline-block;
        padding: 0 1em;

        &:hover {
          transform: scale(1.05);
          transition: font-weight 0.2s ease;
        }

        a {
          color: $black;
          font-weight: bold;
          font-size: 1.2em;
          text-decoration: none;
        }

        select {
          width: 80px;
          border: none;
          font-size: 1.2em;
          font-weight: bold;
          cursor: pointer;

          option {
            color: $brown;
          }
        }
      }
    }
  }

  .theme {
    width: 25px;
    height: 25px;
    background-image: url('#{$themeL}');
    background-repeat: no-repeat;
    cursor: pointer;
  }

  button {
    display: none;

    @include m1366 {
      display: flex;
      border: none;
      background-color: $brown;
      color: white;
      font-size: 1em;
      padding: 0.4em 2em;
      border-radius: 0.3em;
      cursor: pointer;
      transition: all ease-in-out 300ms;

      &:hover {
        background-color: $brownH;
      }

      &.logout {
        background-color: $colW;
        color: $brown;
        border: 1px solid $brown;

        &:hover {
          background-color: $brownH;
          color: $colW;
        }
      }
    }
  }

  .burger {
    cursor: pointer;

    @include m1366 {
      display: none;
    }

    .barra {
      width: 40px;
      height: 4px;
      margin: 6px;
      background-color: $brown;
      transition: 400ms all ease-in-out;
    }

    &.abierto {
      .barra {
        background-color: $brown;

        &.superior {
          transform: translateY(10px) rotateZ(45deg);
        }

        &.media {
          width: 0;
        }

        &.inferior {
          transform: translateY(-10px) rotateZ(-45deg);
        }
      }
    }
  }
}

/* Menú lateral */
menu {
  position: fixed;
  left: -360px;
  width: 300px;
  height: 350px;
  top: 110px;
  background-color: $black;
  padding: 1em;
  transition: all 700ms ease-in-out;

  &.abierto {
    left: 0;
  }

  nav {
    display: flex;
    flex-direction: column;

    a {
      display: flex;
      padding: 1rem 0;
      color: $colW;
      font-size: 1.1rem;
      transition: 300ms all ease-in-out;
      text-decoration: none;
      justify-content: center;

      &:hover {
        color: $brown;
      }
    }

    hr {
      width: 100%;
      border-color: $brown;
    }
  }

  button {
    background-color: $brown;
    color: white;
    width: 100%;
    padding: 10px 0;
    border-radius: 10px;
    border: 0;
    font-size: 20pt;
    margin-bottom: 1em;
    cursor: pointer;

    &:hover {
      background-color: $brownH;
    }

    &.logout {
      background-color: $colW;
      color: $brown;
      border: 1px solid $brown;

      &:hover {
        background-color: $brownH;
        color: $colW;
      }
    }
  }

  select {
    position: relative;
    width: 95px;
    left: 83px;
    background-color: $black;
    padding: 0.9rem;
    color: $colW;
    border: none;
    font-size: 1.1rem;

    &:hover {
      color: $brown;
    }

    option {
      color: $colW;
    }
  }
}

/* bar */
.bar {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background: $black;
  color: $colW;

  .nav-links {
    list-style: none;

    li {
      display: inline;
      padding: 0 1em;

      a {
        font-size: 1em;
        text-decoration: none;
        color: $colW;
      }
    }
  }
}`,'type': "css"
    },
    {'home.component.html':`
<div class="hero">
  <div></div>
  <div></div>
  <div></div>
  <div class="hero-logo">
    <img src="../../../assets/logo_D.svg" alt="Logo Natsoft">
  </div>
</div>`, 'type': "html"
    },
    {'_home.scss':`
/* Hero */
.hero {
  padding: 0 0 15em;
  width: 100%;
  height: 80vh;
  background-color: black;
  position: absolute;
  top: 107px;
  left: 0;
  overflow: hidden;

  @keyframes heroAnimation {
    0% {
      opacity: 0;
      animation-timing-function: ease-in;
    }

    12% {
      opacity: 1;
    }

    25% {
      transform: scale(1.2);
    }

    75% {
      opacity: 0;
      transform: scale(1.1);
    }

    100% {
      opacity: 0;
    }
  }

  div {
    width: 100%;
    height: 45vh;
    position: absolute;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: center;
    background-repeat: none;
    opacity: 0;
    animation: heroAnimation 18s infinite;

    @include m1366 {
      height: 100vh;
    }

    &:nth-child(1) {
      background-image: url('#{$home1}');
    }

    &:nth-child(2) {
      background-image: url('#{$home2}');
      animation-delay: 6s;
    }

    &:nth-child(3) {
      background-image: url('#{$home3}');
      animation-delay: 12s;
    }

  }

  .hero-logo {
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: none;
    opacity: 1;
    width: 50%;
    height: auto;
    @include m1366 {
      top: 40%;
    }
  }
}
`,'type':'css'
    },
    {'footer.component.html':`
<footer>
  <div class="group">
    <p>My Pets</p><br>
    <p>
      <img src="../../../assets/icons/map.svg" alt="Icono de mapa">
      &nbsp; Carrera 30, Bogotá D.C
    </p>
    <p>
      <img src="../../../assets/icons/whatsapp.svg" alt="Icono de teléfono">
      &nbsp; +573142015171
    </p>
    <p>
      <img src="../../../assets/icons/mailF.svg" alt="Icono de email">
      &nbsp; natsoftx&#64;gmail.com
    </p>
  </div>
  <div class="group">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13376.225001089715!2d-74.07299294633886!3d4.634100454540533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1693320076553!5m2!1ses-419!2sco"
      width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false"
      tabindex="0"></iframe>
  </div>
  <div class="group">
    <div class="flex-center">
      <a href="https://www.facebook.com/natsoftx">
        <img class="rrss" src="../../../assets/icons/facebook.svg" alt="Icono de Facebook">
      </a>
      <a href="https://twitter.com/natsoftx">
        <img class="rrss" src="../../../assets/icons/twitter.svg" alt="Icono de Twitter">
      </a>
      <a href="https://www.youtube.com/@natsoftx">
        <img class="rrss" src="../../../assets/icons/youtube.svg" alt="Icono de Whatsapp">
      </a>
      <a href="https://www.instagram.com/natsoft/">
        <img class="rrss" src="../../../assets/icons/instagram.svg" alt="Icono de Instagram">
      </a>
    </div><br>
    <span class="flex-center">&copy; 2023, Natsoft - rights reserved</span>
  </div>
</footer>`, 'type': "html"
    },
    {'_footer.scss':`
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: $black;
  color: $colG;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @include m1366{
    padding: 0 6em;
    flex-direction: row;
    align-items: flex-start;
  }

  .group {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    p {
      &:first-child {
        color: $brown;
        font-weight: bold;
      }
    }

    img.rrss {
      height: 48px;
      border-radius: 0.5em;
      margin: 0.1em 1em;
    }
  }

  .flex-center {
    display: flex;
    justify-content: center;
  }
}`,'type':'css'
    },
    {'galeria.component.html':`
<app-spinner *ngIf="spinner"/>
<div class="gallery-container" infiniteScroll (scrolled)="onScrollDown()" >
  <div class="gallery">
    <div *ngFor="let i of catalog; let j=index">
      <div class="gallery-img">
        <span>
          <p *ngIf="!likes.includes(i.id)" class="unlike" (click)="like(i.id)">{{i.likes}}</p>
          <p *ngIf="likes.includes(i.id)">{{i.likes}}</p>
          <p class="visits">{{i.visits}}</p>
        </span>
        <img src="../../../assets/img/{{i.id}}.jpg" alt="" (click)="onLightbox(j, i.id)">
      </div>
    </div>
  </div>
</div>
<div *ngIf="lightbox" class="lightbox">
  <span class="count">{{currentIndex+1}}/{{totalImages}}</span>
  <button class="close-btn" (click)="offLightbox()">
    <i class="far fa-times"></i>
  </button>
  <button class="btn-lightbox-carousel btn-prev" (click)="prev()">
    <i class="fas fa-arrow-circle-left icon-lightbox-carousel icon-prev"></i>
  </button>
  <button class="btn-lightbox-carousel btn-next" (click)="next()">
    <i class="fas fa-arrow-circle-right icon-lightbox-carousel icon-next"></i>
  </button>
  <div class="lightbox-img">
    <img src="../../../assets/img/{{catalog[currentIndex].id}}.jpg" alt="">
  </div>
</div>`, 'type':"html"
    },
    {'_gallery.scss':`
.gallery-container {
  padding: 1.5em 5em;
  display: flex;
  justify-content: center;


  .gallery {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: center;

    .gallery-img {
      width: calc(20% - 20px);
      margin: 10px;
      width: 230px;
      height: 350px;
      border-radius: 20px;
      background-color: lightgray;
      position: relative;
      @include m720{
        width: 200px;
        height: 310px;
      }


      img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
        object-fit: cover;
        cursor: zoom-in;
      }

      span {
        @extend .span;

        p {
          @extend .p;
        }
      }

      &:hover {
        filter: opacity(0.9);
      }
    }
  }

  .masonry {
    .masonry-item {
      margin-bottom: 20px;


      img {
        width: 230px;
        border-radius: 20px;
        cursor: zoom-in;
        display: block;

      }

      span {
        @extend .span;

        p {
          @extend .p;
        }
      }

      &:hover {
        filter: opacity(0.9);
      }
    }
  }
}

.span {
  position: absolute;
  bottom: 0;
  width: 160px;
  height: 35px;
  background-color: rgba(128, 128, 128, 0.6);
  border-radius: 0 20px;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
  pointer-events: all;
  cursor: default;
  display: flex;
  justify-content: left;
  align-items: center;

}

.p {
  display: inline;
  background-image: url('#{$like}');
  background-position: 10px center;
  background-size: 1.5em;
  background-repeat: no-repeat;
  padding: 2em 0.4em 2em 2.5em;
  color: $colW;
  cursor: default;
  ;

  &.unlike {
    background-image: url('#{$unlike}');
    cursor: pointer;
    ;
  }

  &.visits {
    background-image: url('#{$visits}');
    background-size: 1.4em;
    ;
  }
}`,'type':'css'
    },
    {'_lightbox.scss':`
.display{
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox {
  @extend .display;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $colBT;
  color: $colW;
  overflow: auto;
  z-index: 100;

  .close-btn {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0;
    color: $colW;
    background: 0;
    border: 0;
    cursor: pointer;
    width: 7%;
    height: 10%;
    z-index: 2;
  }

  .count {
    @extend .display;
    position: absolute;
    top: 0;
    left: 0;
    width: 7%;
    height: 10%;
    opacity: 0.7;
    font-size: 18px;
    margin-left: 5px;
  }

  .fa-times {
    font-size: 25px;
  }

  .btn-lightbox-carousel {
    @extend .display;
    position: absolute;
    z-index: 1;
    width: 8%;
    height: 8%;
    padding: 0;
    color: $colW;
    text-align: center;
    background: 0 0;
    border: 0;
    cursor: pointer;
  }

  .btn-prev {
    left: 0;
  }

  .btn-next {
    right: 0;
  }

  .icon-lightbox-carousel {
    opacity: 0.5;
    transition: all 0.15s ease;
  }

  .icon-lightbox-carousel:hover {
    opacity: 0.9;
  }

  .icon-lightbox-carousel:active {
    opacity: 0.5;
  }

  .icon-prev,
  .icon-next {
    font-size: 30px;
  }

  .lightbox-img img {
    width: 100vh;
    height: 100vh;
    object-fit: contain;
    border-radius: .35rem;
    cursor: default;
    padding: 50px;
  }
}`,'type':'css'
    },
    {'spinner.component.html':`
<div class="overlay">
  <div class="lds-ripple"><div></div><div></div></div>
</div>`,'type':'html'
    },
    {'_spinner.scss':`
/// SPINNER ///
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid $brown;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}

.overlay {
  display: flex;
  align-items:start;
  justify-content: center;
  position: fixed;
  padding-top: 100px;
  top: 109px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0);
  overflow: auto;
  z-index: 99;
  animation: overlayAnimation 5s linear forwards;
}
@keyframes overlayAnimation {
  80% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}`,'type':'css'
    },
    {'login.component.html':`
<section class="home">
  <div class="modal" *ngIf="showLogin">
    <div class="form_container">
      <img class="form_close" src="../../../assets/icons/xmark.svg" width="20px" (click)="closeLogin()">
      <div class="login_form">
          <h2>Login</h2>
          <div class="input_box">
            <input class="correo" type="email" [(ngModel)]="correo" placeholder="Ingrese correo" />
          </div>
          <div class="input_box">
            <input class="password" type="password" [(ngModel)]="password" placeholder="Password" />
            <i class=" password"></i>
          </div>
          <button type="submit" class="button" (click)="login()">Ingresar</button>
          <div class="login_signup">¿No tienes cuenta? <a href="#" routerLink="/register"> Registrarse</a></div>
      </div>
    </div>
  </div>
</section>`,'type':'html'
    },
    {'_login.scss':`
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
}

.home {
  position: absolute;
  height: 90vh;
  width: 100%;
  background-image: url("../assets/pet.jpg");
  background-size: cover;
  background-position: center;
  pointer-events:all;
  z-index: 99;
  cursor:pointer;
}

.form_container {
  position: fixed;
  max-width: 320px;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.2);
  background: #fff;
  padding: 25px;
  border-radius: 12px;

  &.active .login_form {
    display: block;
  }

  .form_close {
    position: absolute;
    top: 10px;
    right: 20px;
    color: $black;
    opacity: 0.8;
    cursor: pointer;
  }

  h2 {
    font-size: 22px;
    color: $brown;
    text-align: center;
  }

  .input_box {
    position: relative;
    margin-top: 30px;
    width: 100%;
    height: 40px;

    input {
      height: 100%;
      width: 100%;
      border: none;
      outline: none;
      padding: 0 30px;
      color: #333;
      transition: all 0.2s ease;
      border-bottom: 1.5px solid #aaaaaa;

      &.correo {
        background-image: url('#{$mailL}');
        background-size: 20px;
        background-repeat: no-repeat;
        background-position: 0 11px;
        padding-left: 3em;
      }
      &.password {
        background-image: url('#{$keyL}');
        background-size: 20px;
        background-repeat: no-repeat;
        background-position: 0 11px;
        padding-left: 3em;
      }

      &:focus {
        border-color: $brown;
      }
    }
  }

  .button {
    background: $brown;
    margin-top: 30px;
    width: 100%;
    padding: 10px 0;
    border-radius: 10px;
    color: white;
    border: 0;

    &:hover {
      background: $brownH
    }
  }

  .login_signup {
    font-size: 12px;
    text-align: center;
    margin-top: 15px;
  }
}`,'type':'css'
    }
  ]

  ngOnInit() {
    this.endpoint = this.location.path().split('/')[2];
    const code = this.findFile(this.code, this.endpoint);
    this.type = this.findType(this.code, this.endpoint);
    this.html = Prism.highlight(code, Prism.languages.html, this.type);
  }

  findFile(arr: any, clave: any) {
    for (var i = 0; i < arr.length; i++) {
      if (clave in arr[i]) {
        return arr[i][clave];
      }
    }
    return null;
  }

  findType(arr: any, clave: any) {
    for (var i = 0; i < arr.length; i++) {
      if (clave in arr[i]) {
        return arr[i]['type'];
      }
    }
    return null;
  }
}
