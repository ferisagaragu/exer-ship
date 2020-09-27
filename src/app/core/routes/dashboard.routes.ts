import { Routes } from "@angular/router";
import { AuthenticationGuard } from "../guards/authentication.guard";

export const DASHBOARD_ROUTING: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthenticationGuard]
  }
];
