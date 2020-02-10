import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;

  radioItems = [
    { title: 'Radio 1', value: 1 },
    { title: 'Radio 2', value: 2 },
    { title: 'Radio 3', value: 3 },
    { title: 'Radio 4', value: 4 }
  ];

  constructor() {
    this.buildForm();
  }

  ngOnInit() {
  }

  printPhone() {
    console.log(this.phone);
  }

  buildForm() {
    this.form = new FormGroup({
      phone: new FormControl('', [ Validators.required, Validators.minLength(10) ]),
      email: new FormControl('', [ Validators.required ]),
      checkbox: new FormControl(true),
      radio: new FormControl(1)
    });
  }

  submit() {
  }

  get phone() {
    return this.form.get('phone');
  }

  get email() {
    return this.form.get('email');
  }

  get checkbox() {
    return this.form.get('checkbox');
  }

  get radio() {
    return this.form.get('radio');
  }

}
