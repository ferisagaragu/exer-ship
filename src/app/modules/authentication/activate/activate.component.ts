import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthenticationService } from "../../../core/http/authentication.service";
import { ActivatedRoute, Router } from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.scss']
})
export class ActivateComponent implements OnInit {

  form: FormGroup;
  load: boolean;
  userUid: string;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {
    this.load = false;
    this.createForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      ({ uid }) => {
        this.userUid = uid;
        this.canActivateAccount(uid);
      }, () => {}
    );
  }

  canActivateAccount(uid) {
    this.authenticationService.canActivate(uid).subscribe(
      (resp: any) => { },
      ({ error }) => {
        Swal.fire({
          title: 'Ohh no!!',
          text: error.message,
          icon: 'error'
        }).then(() => {
          this.route.navigate(['/']);
        });
      }
    );
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
        Swal.fire({
          title: 'Yeeii!!',
          text: 'Cuenta activada',
          icon: 'success'
        }).then(() => {
          this.route.navigate(['/'])
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

}
