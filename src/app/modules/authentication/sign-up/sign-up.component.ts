import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthenticationService } from "../../../core/http/authentication.service";
import { UserModel } from "../../../core/model/user.model";
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

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
      (resp: any) => {
        Swal.fire({
          title: 'Yeeii!!',
          text: resp.message,
          icon: 'success'
        }).then(() => {
          this.router.navigate(['/']);
        });
        this.load = false;
      }, ({ error }) => {
        Swal.fire({
          title: 'Ohh no!!',
          text: error.message,
          icon: 'error'
        });

        this.load = false;
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
