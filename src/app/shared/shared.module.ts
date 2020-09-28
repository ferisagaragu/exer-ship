import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { InlineSVGModule } from 'ng-inline-svg';
import { BarExerciseComponent } from './bar-exercise/bar-exercise.component';
import { BarExerciseShadowDirective } from '../core/directives/bar-exercise-shadow.directive';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    BarExerciseComponent,
    BarExerciseShadowDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    InlineSVGModule.forRoot()
  ],
  exports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    InlineSVGModule,
    BarExerciseComponent,
    BarExerciseShadowDirective
  ]
})
export class SharedModule { }
