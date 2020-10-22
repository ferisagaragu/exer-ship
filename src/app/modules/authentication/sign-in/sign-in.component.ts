import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../core/http/authentication.service';
import { Router } from '@angular/router';
import { errorAlert } from '../../../core/functions/swal.function';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  form: FormGroup;
  load: boolean;
  hide: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.createForm();
    this.load = false;
    this.hide = true;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    this.load = true;

    this.authenticationService.singIn(this.form.value).subscribe(
      resp => {
        this.load = false;
        this.router.navigate(['/progress']);
      }, ({ error }) => {
        this.load = false;
        errorAlert(error.message);
      }
    );
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      userName: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

}
