import { Component, OnInit }                  from '@angular/core';
import { UsersService}                        from '../UsersService';
import { User }                               from '../../models/User';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PasswordMatcher } from '../../utils/PasswordMatcher';


@Component({
  moduleId    : module.id,
  templateUrl : 'registerForm.html'
})
export class RegisterForm {
  pageTitle: string = 'Marky';
  registerForm: FormGroup;

  constructor(private usersService: UsersService, private fb: FormBuilder) { }

ngOnInit() {
  this.registerForm = this.fb.group({
      username        : ['', [Validators.required, Validators.minLength(2)]],
      // tslint:disable-next-line:max-line-length
      email           : ['', Validators.pattern('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/')],
      password        : ['', Validators.required],
      confirmPassword : ['', Validators.required]
    }, { validator: PasswordMatcher });
  }

onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
  }



}
