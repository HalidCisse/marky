import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule }  from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { MarkyApp }     from './markyApp';
import { HomeView }     from './home/home';
import { RegisterView } from './register/register';
import { LoginView }    from './login/login';


@NgModule({
    imports : [
    BrowserModule,
    FormsModule,
    HttpModule,

    RouterModule.forRoot([
        { path: 'home',     component: HomeView },
        { path: 'register', component: RegisterView },
        { path: 'login',    component: LoginView },

        { path: '',   redirectTo: 'home', pathMatch: 'full' },
        { path: '**', redirectTo: 'home', pathMatch: 'full' }
      ])
    ],

    declarations : [
        MarkyApp,
        HomeView,
        RegisterView,
        LoginView
    ],

    bootstrap : [MarkyApp],
    providers : [{provide: APP_BASE_HREF, useValue : '/' }] ,
})
export class MarkyModule {

}