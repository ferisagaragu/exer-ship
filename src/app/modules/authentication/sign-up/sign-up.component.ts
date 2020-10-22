import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../core/http/authentication.service';
import { UserModel } from '../../../core/model/user.model';
import { Router } from '@angular/router';
import { errorAlert, successAlert } from '../../../core/functions/swal.function';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  form: FormGroup;
  load: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.load = false;
    this.createForm();
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    this.load = true;
    this.authenticationService.singUp(new UserModel(this.form.value)).subscribe(
      (resp) => {
        this.load = false;
        successAlert(resp.message).then(() => {
          this.router.navigate(['/']);
        });
      }, ({ error }) => {
        this.load = false;
        errorAlert(error.message);
      }
    )
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      userName: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      email: ['', Validators.compose([Validators.required, Validators.email])]
    });
  }

}
