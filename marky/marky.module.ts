import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule }  from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { MarkyComponent }    from './marky.app';
import { HomeComponent }     from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent }    from './login/login.component';


@NgModule({
    imports : [
    BrowserModule,
    FormsModule,
    HttpModule,

    RouterModule.forRoot([
        { path: 'home',     component: HomeComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'login',    component: LoginComponent },

        { path: '',   redirectTo: 'home', pathMatch: 'full' },
        { path: '**', redirectTo: 'home', pathMatch: 'full' }
      ])
    ],

    declarations : [
        MarkyComponent,
        HomeComponent,
        RegisterComponent,
        LoginComponent
    ],

    bootstrap : [MarkyComponent],
    providers : [{provide: APP_BASE_HREF, useValue : '/' }] ,
})
export class MarkyModule {

}