import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './pages/services/services.component';
import { ServiceDetailsComponent } from './pages/service-details/service-details.component';


@NgModule({
  declarations: [
    ServicesComponent,
    ServiceDetailsComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
