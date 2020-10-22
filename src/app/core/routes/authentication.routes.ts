import { Routes } from '@angular/router';
import { UnauthenticatedGuard } from '../guards/unauthenticated.guard';
import { AuthenticationGuard } from '../guards/authentication.guard';

export const AUTHENTICATION_ROUTING: Routes = [
  {
    path: 'authentication',
    loadChildren: () => import('../../modules/authentication/authentication.module').then(m => m.AuthenticationModule),
    canActivate: [UnauthenticatedGuard]
  }, {
    path: 'progress',
    canActivate: [AuthenticationGuard]
  }
];
