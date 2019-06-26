import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  namesForm: FormGroup;
  emailForm: FormGroup;
  passwordForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

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

  onSubmit() {
    const email = this.emailForm.value.email;
    const password = this.passwordForm.value.password;
    this.authService.registerUser({email, password});
  }
}
