import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../../shared/shared.module';
import { FormDayComponent } from './form-day/form-day.component';
import { CardUserComponent } from './card-user/card-user.component';


@NgModule({
  declarations: [HomeComponent, FormDayComponent, CardUserComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
