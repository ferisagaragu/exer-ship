import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../core/http/authentication.service';
import { Router } from '@angular/router';
import { errorAlert, successAlert } from '../../../core/functions/swal.function';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent {

  form: FormGroup;
  load: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.load = false;
    this.createForm();
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    this.load = true;
    this.authenticationService.recoverPassword(this.form.value).subscribe(
      (resp: any) => {
        successAlert(resp.message).then(() => {
          this.router.navigate(['/']);
          this.load = false;
        });
      }, (error) => {
        errorAlert(error.message);
        this.load = false;
      }
    );
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])]
    });
  }

}
