import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RetreivePasswordComponent } from './pages/retreive-password/retreive-password.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'new-account',component:RegisterComponent},
  {path:'retreive-password',component:RetreivePasswordComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
