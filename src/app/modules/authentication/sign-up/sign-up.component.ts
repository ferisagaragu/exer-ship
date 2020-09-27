import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      userName: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])]
    });
  }

}
