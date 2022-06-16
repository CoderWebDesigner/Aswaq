import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdvertisementComponent } from './pages/add-advertisement/add-advertisement.component';
import { AdvertisementAgreementComponent } from './pages/add-advertisement/advertisement-agreement/advertisement-agreement.component';
import { AdvertisementTypeComponent } from './pages/add-advertisement/advertisement-type/advertisement-type.component';

const routes: Routes = [
  {path:'add-advertisement',component:AddAdvertisementComponent,children:[
    {path:'type',component:AdvertisementTypeComponent},
    {path:'agreement',component:AdvertisementAgreementComponent},

  ]},
  {path:'add-advertisement',redirectTo:'add-advertisement/type',pathMatch:'full'},
  {path:'',redirectTo:'add-advertisement/type',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvertisementRoutingModule { }
