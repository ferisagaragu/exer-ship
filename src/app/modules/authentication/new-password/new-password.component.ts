import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../../core/http/authentication.service';
import { SweetAlertService } from '../../../core/services/sweet-alert.service';

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
    private authenticationService: AuthenticationService,
    private sweetAlertService: SweetAlertService
  ) {
    this.load = false;
    this.hide = true;
    this.createForm();
    this.getParams();
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
        this.load = false;
        this.sweetAlertService.successAlert(resp.message).then(() => {
          this.router.navigate(['/']);
        });

      }, (error) => {
        this.load = false;
        this.sweetAlertService.errorAlert(error.message);
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

  private getParams(): void {
    this.activatedRoute.params.subscribe(({ activatePassword }) => {
      this.activatePassword = activatePassword;
    });
  }

}
