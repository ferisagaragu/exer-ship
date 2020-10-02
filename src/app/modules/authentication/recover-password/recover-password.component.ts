import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../core/http/authentication.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

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
        Swal.fire({
          title: 'Yeeii!!',
          text: resp.message,
          icon: 'success'
        }).then(() => {
          this.router.navigate(['/']);
        });
        this.load = false;
      }, (error) => {
        Swal.fire({
          title: 'Ohh no!!',
          text: error.message,
          icon: 'error'
        });

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
