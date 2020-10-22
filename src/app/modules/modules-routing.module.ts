import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BASE_ROUTES } from '../core/routes/base.routes';
import { AUTHENTICATION_ROUTING } from '../core/routes/authentication.routes';

const routes: Routes = [
  ...BASE_ROUTES,
  ...AUTHENTICATION_ROUTING
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
