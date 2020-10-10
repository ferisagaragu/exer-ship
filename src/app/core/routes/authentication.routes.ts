import { Routes } from '@angular/router';
import { UnauthenticatedGuard } from '../guards/unauthenticated.guard';

export const AUTHENTICATION_ROUTING: Routes = [
  {
    path: 'authentication',
    loadChildren: () => import('../../modules/authentication/authentication.module').then(m => m.AuthenticationModule),
    canActivate: [UnauthenticatedGuard]
  }
];
