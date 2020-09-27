import { Routes } from "@angular/router";

export const BASE_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'authentication'
  }
];
