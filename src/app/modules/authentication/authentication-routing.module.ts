import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AUTHENTICATION_ROUTING_CHILDREN } from '../../core/routes/authentication.routes';

const routes: Routes = [
  ...AUTHENTICATION_ROUTING_CHILDREN
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
