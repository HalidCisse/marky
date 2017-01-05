import { Component, OnInit }                  from '@angular/core';
import { UsersService}                        from '../UsersService';
import { User }                               from '../../models/User';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  moduleId    : module.id,
  templateUrl : 'loginForm.html'
})
export class LoginForm implements OnInit {
  pageTitle: string = 'Marky';
  userForm: FormGroup;

constructor(private usersService: UsersService, private fb: FormBuilder) { }

ngOnInit() {
  this.userForm = this.fb.group({
      username : ['', [Validators.required, Validators.minLength(2)]],
      email    : ['', Validators.required],
      password : ['', Validators.required]
    });
  }

onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
  }

}
