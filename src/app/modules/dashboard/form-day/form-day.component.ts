import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-day',
  templateUrl: './form-day.component.html',
  styleUrls: ['./form-day.component.scss']
})
export class FormDayComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.createForm();
  }

  ngOnInit(): void { }

  private createForm(): void {
    this.form = this.formBuilder.group({
      name: ['hola', Validators.compose([Validators.required])]
    });
  }

}
