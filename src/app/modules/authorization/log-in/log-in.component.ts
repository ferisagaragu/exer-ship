import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthorizationService } from 'src/app/core/http/authorization.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authorizationService: AuthorizationService
  ) { 
    this.createForm();
  }

  onSubmit(): void {    
    if (this.form.invalid) {
      return;
    }


    console.log(this.form.value);
    this.authorizationService.logIn(this.form.value).subscribe((resp) => console.log(resp));
  }

  
  private createForm(): void {
    this.form = this.formBuilder.group({
      userName: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

}
