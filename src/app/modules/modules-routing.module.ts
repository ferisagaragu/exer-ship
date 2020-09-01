import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BASE_ROUTES } from '../core/routes/base.routes';
import { AUTHORIZATION_ROUTING } from '../core/routes/authorization.routes';


const routes: Routes = [
  ...BASE_ROUTES,
  ...AUTHORIZATION_ROUTING
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
