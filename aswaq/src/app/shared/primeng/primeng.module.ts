import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropdownModule} from 'primeng/dropdown';
import {PaginatorModule} from 'primeng/paginator';
import {SkeletonModule} from 'primeng/skeleton';
import {GalleriaModule} from 'primeng/galleria';
import {GMapModule} from 'primeng/gmap';
import {StepsModule} from 'primeng/steps';
import {CheckboxModule} from 'primeng/checkbox';

const primengModules = [DropdownModule,PaginatorModule,SkeletonModule,GalleriaModule,GMapModule,StepsModule,CheckboxModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    primengModules
  ],
  exports:[
    primengModules
  ]
})
export class PrimengModule { }
