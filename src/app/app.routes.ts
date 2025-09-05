import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'social-drone',
    loadComponent: () => import('./pages/social-drone/social-drone.component').then(m => m.SocialDroneComponent)
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];
