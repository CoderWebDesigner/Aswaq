import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertisementRoutingModule } from './advertisement-routing.module';
import { AddAdvertisementComponent } from './pages/add-advertisement/add-advertisement.component';
import { SharedModule } from '../shared/shared.module';
import { AdvertisementTypeComponent } from './pages/add-advertisement/advertisement-type/advertisement-type.component';
import { AdvertisementAgreementComponent } from './pages/add-advertisement/advertisement-agreement/advertisement-agreement.component';
import { AdvertisementLocationComponent } from './pages/add-advertisement/advertisement-location/advertisement-location.component';



@NgModule({
  declarations: [
    AddAdvertisementComponent, 
    AdvertisementTypeComponent, AdvertisementAgreementComponent, AdvertisementLocationComponent
  ],
  imports: [
    CommonModule,
    AdvertisementRoutingModule,
    SharedModule
  ]
})
export class AdvertisementModule { }
