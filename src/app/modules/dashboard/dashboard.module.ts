import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ListUsersComponent } from './list-users/list-users.component';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [ListUsersComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatProgressBarModule,
    MatButtonModule
  ]
})
export class DashboardModule { }
