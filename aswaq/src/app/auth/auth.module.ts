import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RetreivePasswordComponent } from './pages/retreive-password/retreive-password.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RetreivePasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
