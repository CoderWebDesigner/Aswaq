import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceDetailsComponent } from './pages/service-details/service-details.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  {path:'',component:ServicesComponent},
  {path:'details/:id',component:ServiceDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { } 
