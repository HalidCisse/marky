import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { RouterModule }  from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MarkyApp }     from './markyApp';
import { HomeView }     from './home/home';
import { RegisterForm } from './account/register/registerForm';
import { LoginForm }    from './account/login/loginForm';

import {servicesInjectables} from './shared/Services';
import {utilInjectables}     from './utils/utils';


@NgModule({
    imports : [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,

    RouterModule.forRoot([
        { path: 'home',     component: HomeView },
        { path: 'register', component: RegisterForm },
        { path: 'login',    component: LoginForm },

        { path: '',   redirectTo: 'home', pathMatch: 'full' },
        { path: '**', redirectTo: 'home', pathMatch: 'full' }
      ])
    ],

    declarations : [
        MarkyApp,
        HomeView,
        RegisterForm,
        LoginForm,


        utilInjectables
    ],

    bootstrap : [MarkyApp],
    providers : [{provide: APP_BASE_HREF, useValue : '/' }, servicesInjectables] ,
})
export class MarkyModule {


/*this.userService.currentUser
      .subscribe(
        (user: User) => {
          this.currentUser = user;
        });*/
}
