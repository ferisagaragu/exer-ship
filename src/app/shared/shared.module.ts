import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    ReactiveFormsModule, 
    MatButtonModule,
    MatInputModule
  ]
})
export class SharedModule { }
