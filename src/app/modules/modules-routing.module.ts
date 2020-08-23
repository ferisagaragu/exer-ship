import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BASE_ROUTES } from '../core/routes/base.routes';
import { HERO_ROUTES } from '../core/routes/hero.routes';


const routes: Routes = [
  ...BASE_ROUTES,
  ...HERO_ROUTES
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
