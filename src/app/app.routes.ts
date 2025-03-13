import { Routes } from '@angular/router';
import DemosComponent from './components/demos.component';
import CodeComponent from './components/code.component';


export const routes: Routes = [
  {
    path: '', redirectTo: '/tecnologia',
    pathMatch: 'full',
  },
  // {
  //   path: '',
  //   loadComponent: () => import('./components/cursos.component')
  // },
  {
    path: 'tecnologia',
    loadComponent: () => import('./components/news.component')
  },
  {
    path: 'ciencia',
    loadComponent: () => import('./components/news.component')
  },
  {
    path: 'cursos',
    loadComponent: () => import('./components/cursos.component')
  },
  {
    path: 'videos',
    loadComponent: () => import('./components/videos.component')
  },
 { path: 'code/:id', component: CodeComponent },

  {
    path: 'demos',
    loadComponent: () => import('./components/demos.component')
  },
  {
    path: 'contacto',
    loadComponent: () => import('./components/contacto.component')
  },
  {
    path: 'cursos/python',
    loadComponent: () => import('./components/curso.component')
  },
  {
    path: 'cursos/javascript',
    loadComponent: () => import('./components/curso.component')
  },
  {
    path: 'cursos/java',
    loadComponent: () => import('./components/curso.component')
  },
  {
    path: 'cursos/angular',
    loadComponent: () => import('./components/curso.component')
  },
  {
    path: 'cursos/html',
    loadComponent: () => import('./components/curso.component')
  },
  {
    path: 'cursos/php',
    loadComponent: () => import('./components/curso.component')
  }
];
