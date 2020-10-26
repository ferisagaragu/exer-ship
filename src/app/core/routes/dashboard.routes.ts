import { Routes } from '@angular/router';
import { AuthenticationGuard } from '../guards/authentication.guard';
import { ProgressComponent } from '../../modules/dashboard/progress/progress.component';
import { SignInComponent } from '../../modules/authentication/sign-in/sign-in.component';
import { SignUpComponent } from '../../modules/authentication/sign-up/sign-up.component';
import { MembersComponent } from '../../modules/dashboard/members/members.component';

export const DASHBOARD_ROUTING: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthenticationGuard]
  }
];

export const DASHBOARD_ROUTING_CHILDREN: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'progress'
  },{
    path: 'progress',
    component: ProgressComponent
  },{
    path: 'members',
    component: MembersComponent
  }
];
