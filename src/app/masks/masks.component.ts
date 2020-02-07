import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-masks',
  templateUrl: './masks.component.html',
  styleUrls: ['./masks.component.scss']
})
export class MasksComponent implements OnInit {
  form: FormGroup;

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
      email: new FormControl('', [ Validators.required ])
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

}
