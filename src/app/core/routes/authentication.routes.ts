import { Routes } from "@angular/router";
import { SignInComponent } from "../../modules/authentication/sign-in/sign-in.component";
import { ActivateComponent } from "../../modules/authentication/activate/activate.component";
import { SignUpComponent } from "../../modules/authentication/sign-up/sign-up.component";

export const AUTHENTICATION_ROUTING: Routes = [
  {
    path: 'authentication',
    loadChildren: () => import('../../modules/authentication/authentication.module').then(m => m.AuthenticationModule)
  }
];
