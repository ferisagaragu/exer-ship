import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from "./sign-in/sign-in.component";
import { ActivateComponent } from "./activate/activate.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { RecoverPasswordComponent } from "./recover-password/recover-password.component";
import { NewPasswordComponent } from './new-password/new-password.component';
import { CanChangePasswordGuard } from '../../core/guards/can-change-password.guard';
import { CanActivateAccountGuard } from '../../core/guards/can-activate-account.guard';

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
