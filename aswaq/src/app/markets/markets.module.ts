import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketsRoutingModule } from './markets-routing.module';
import { ListComponent } from './pages/list/list.component';
import { DetailsComponent } from './pages/list/details/details.component';
import { FilterListComponent } from './pages/list/filter-list/filter-list.component';
import { ItemComponent } from './pages/list/item/item.component';
import { SharedModule } from '../shared/shared.module';
import { CarsService } from '../shared/services/cars/cars.service';
import { StatesService } from '../shared/services/states/states.service';
import { GovernoratesService } from '../shared/services/governorates/governorates.service';
import { SquaresService } from '../shared/services/squares/squares.service';
import { CommentsComponent } from './pages/list/details/comments/comments.component';
import { RelatedComponent } from './pages/list/details/related/related.component';
import { CarFilterComponent } from './pages/list/filter-list/car-filter/car-filter.component';
import { BuildingsFilterComponent } from './pages/list/filter-list/buildings-filter/buildings-filter.component';
import { FurnituresFilterComponent } from './pages/list/filter-list/furnitures-filter/furnitures-filter.component';
import { AnimalsFilterComponent } from './pages/list/filter-list/animals-filter/animals-filter.component';
import { CarAdvertisementDetailsComponent } from './pages/list/details/car-advertisement-details/car-advertisement-details.component';
import { FurnitureAdvertisementDetailsComponent } from './pages/list/details/furniture-advertisement-details/furniture-advertisement-details.component';
import { AnimalAdvertisementDetailsComponent } from './pages/list/details/animal-advertisement-details/animal-advertisement-details.component';


@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    FilterListComponent,
    ItemComponent,
    CommentsComponent,
    RelatedComponent,
    CarFilterComponent,
    BuildingsFilterComponent,
    FurnituresFilterComponent,
    AnimalsFilterComponent,
    CarAdvertisementDetailsComponent,
    FurnitureAdvertisementDetailsComponent,
    AnimalAdvertisementDetailsComponent
  ],
  providers:[StatesService,GovernoratesService,SquaresService,CarsService],
  imports: [
    CommonModule,
    MarketsRoutingModule,
    SharedModule
  ]
})
export class MarketsModule { }
