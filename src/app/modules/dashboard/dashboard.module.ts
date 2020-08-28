import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ListUsersComponent } from './list-users/list-users.component';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { FormRegistExerciseComponent } from './form-regist-exercise/form-regist-exercise.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [ListUsersComponent, FormRegistExerciseComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatProgressBarModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ]
})
export class DashboardModule { }
