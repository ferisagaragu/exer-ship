import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { UsersService } from '../../../core/http/users.service';
import { UserModel } from 'src/app/core/model/user.model';

@Component({
  selector: 'app-form-regist-exercise',
  templateUrl: './form-regist-exercise.component.html',
  styleUrls: ['./form-regist-exercise.component.scss']
})
export class FormRegistExerciseComponent {

  userData: UserModel;
  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private userService: UsersService,
    private dialog: MatDialog  
  ) { 
    this.createForm();
    this.userData = data;
  }

  save() {
    const { food, exercise } = this.form.value;
    const { progress } = this.userData;
    let value = progress;

    if (food) {
      value += 50;
    }

    if (exercise) {
      value += 50;
    }

    this.userService.saveProgress({
      ...this.userData,
      progress: value
    }).subscribe((resp) => {
      
    }, (err) => {
      console.log(err);
    })
  }

  onCancel(): void {
    this.dialog.closeAll();
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      exercise: [false],
      food: [false]
    });
  }

}
