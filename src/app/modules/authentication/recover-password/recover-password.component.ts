import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent {

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
      email: ['', Validators.compose([Validators.required])]
    });
  }
}
