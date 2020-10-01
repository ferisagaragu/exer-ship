import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthenticationService } from "../../../core/http/authentication.service";
import { UserModel } from "../../../core/model/user.model";
import Swal from 'sweetalert2';

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
    this.authenticationService.singUp(new UserModel(this.form.value)).subscribe(
      () => {
        Swal.fire({
          title: 'Yeeii!!',
          text: 'Te has registrado de manera exitosa, ' +
            'revisa tu correo electrónico para ' +
            'activar tu cuenta.',
          icon: 'success'
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
      name: ['', Validators.compose([Validators.required])],
      userName: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])]
    });
  }

}
