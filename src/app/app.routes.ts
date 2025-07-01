import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component'),
  },

  {
    path: 'monitoring',
    loadComponent: () => import('./pages/monitoring/monitoring.component'),
  },
];
