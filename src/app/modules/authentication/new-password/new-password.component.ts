import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../../core/http/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent {

  form: FormGroup;
  activatePassword: string;
  load: boolean;
  hide: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) {
    this.load = false;
    this.hide = true;
    this.createForm();
    this.canChangePassword();
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    this.load = true;
    this.authenticationService.changePassword({
      activatePassword: this.activatePassword,
      ...this.form.value
    }).subscribe(
      (resp: any) => {
        Swal.fire({
          title: 'Yeeii!!',
          text: 'Se a cambiado tu contraseña ahora podras iniciar sesión con ella',
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
      password: ['',
        Validators.compose([
          Validators.required,
          Validators.pattern(
            '(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$'
          )
        ])
      ]
    });
  }

  private canChangePassword(): void {
    this.activatedRoute.params.subscribe(({ uid }) => {
      this.activatePassword = uid;
      this.authenticationService.canChangePassword(uid).subscribe(
        (resp) => {
          console.log(resp);
        }, ({ error }) => {
          Swal.fire({
            title: 'Ohh no!!',
            text: error.message,
            icon: 'error'
          }).then(() => {
            this.router.navigate(['/']);
          });
        }
      );
    });
  }

}
