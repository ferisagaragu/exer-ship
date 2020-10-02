import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../core/http/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  form: FormGroup;
  hide: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.createForm();
    this.hide = true;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    this.authenticationService.logIn(this.form.value).subscribe(
      resp => {
        this.router.navigate(['/dashboard'])
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
