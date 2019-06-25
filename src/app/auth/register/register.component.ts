import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  namesForm: FormGroup;
  emailForm: FormGroup;
  passwordForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.namesForm = this.formBuilder.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
    });
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
    this.passwordForm = this.formBuilder.group({
      password: ['', Validators.required]
    });
  }

}
