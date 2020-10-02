import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../core/http/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { errorAlert, successAlert } from '../../../core/functions/swal.function';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.scss']
})
export class ActivateComponent {

  form: FormGroup;
  load: boolean;
  userUid: string;
  hide: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private activatedRoute: ActivatedRoute,
    private route: Router
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
    this.authenticationService.activateAccount({
      ...this.form.value,
      uid: this.userUid
    }).subscribe(
      (resp) => {
        successAlert(resp.message).then(() => {
          this.load = false;
          this.route.navigate(['/'])
        });
      }, ({ error }) => {
        errorAlert(error.message);
        this.load = false;
      }
    )
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
    this.activatedRoute.params.subscribe(
      ({ uid }) => {
        this.userUid = uid;
      }, () => {}
    );
  }

}
