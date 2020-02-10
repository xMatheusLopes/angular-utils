import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-masks',
  templateUrl: './masks.component.html',
  styleUrls: ['./masks.component.scss']
})
export class MasksComponent implements OnInit {
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
      phone: new FormControl(''),
      email: new FormControl(''),
      checkbox: new FormControl(true),
      checkbox2: new FormControl(false),
      radio: new FormControl(1),
      radio2: new FormControl(2)
    });
  }

  submit() {
    alert(this.radio.value);
    alert(this.radio2.value);
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

  get checkbox2() {
    return this.form.get('checkbox2');
  }

  get radio() {
    return this.form.get('radio');
  }

  get radio2() {
    return this.form.get('radio2');
  }

}
