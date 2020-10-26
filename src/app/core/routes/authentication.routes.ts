import { Routes } from '@angular/router';
import { UnauthenticatedGuard } from '../guards/unauthenticated.guard';
import { SignInComponent } from '../../modules/authentication/sign-in/sign-in.component';
import { SignUpComponent } from '../../modules/authentication/sign-up/sign-up.component';
import { ActivateComponent } from '../../modules/authentication/activate/activate.component';
import { CanActivateAccountGuard } from '../guards/can-activate-account.guard';
import { RecoverPasswordComponent } from '../../modules/authentication/recover-password/recover-password.component';
import { NewPasswordComponent } from '../../modules/authentication/new-password/new-password.component';
import { CanChangePasswordGuard } from '../guards/can-change-password.guard';

export const AUTHENTICATION_ROUTING: Routes = [
  {
    path: 'authentication',
    loadChildren: () => import('../../modules/authentication/authentication.module').then(m => m.AuthenticationModule),
    canActivate: [UnauthenticatedGuard]
  }
];

export const AUTHENTICATION_ROUTING_CHILDREN: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sign-in'
  },{
    path: 'sign-in',
    component: SignInComponent
  },{
    path: 'sign-up',
    component: SignUpComponent
  },{
    path: 'activate/:uid',
    component: ActivateComponent,
    canActivate: [CanActivateAccountGuard]
  },{
    path: 'recover-password',
    component: RecoverPasswordComponent
  },{
    path: 'new-password/:activatePassword',
    component: NewPasswordComponent,
    canActivate: [CanChangePasswordGuard]
  }
];
