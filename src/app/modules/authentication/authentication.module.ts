import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SharedModule } from "../../shared/shared.module";
import { ActivateComponent } from './activate/activate.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';


@NgModule({
  declarations: [ActivateComponent, SignUpComponent, SignInComponent, RecoverPasswordComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule
  ]
})
export class AuthenticationModule { }
