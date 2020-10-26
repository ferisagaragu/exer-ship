import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProgressComponent } from './progress/progress.component';
import { SharedModule } from '../../shared/shared.module';
import { MembersComponent } from './members/members.component';

@NgModule({
  declarations: [ProgressComponent, MembersComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
