import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RegisterComponent} from  './register/register.component';
import {AuthenticateComponent} from  './authenticate/authenticate.component';
import { SecurityCodeComponent } from './securityCode/securityCode.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: AuthenticateComponent },
  { path: 'confirmLogin', component: SecurityCodeComponent }
]; 

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})



export class AppRoutingModule { }
