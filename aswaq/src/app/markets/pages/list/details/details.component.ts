import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdvertismentType } from 'src/app/shared/enums/advertisment-type';
import { Categories } from 'src/app/shared/enums/categories';
import { AnimalsService } from 'src/app/shared/services/animals/animals.service';
import { BuildingsService } from 'src/app/shared/services/buildings/buildings.service';
import { CarsService } from 'src/app/shared/services/cars/cars.service';
import { FurnituresService } from 'src/app/shared/services/furnitures/furnitures.service';
import { NavService } from 'src/app/shared/services/nav/nav.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  itemDetails: any;
  advertiseType: any = AdvertismentType;
  category: any = Categories;
  itemId!: string;
  options: any;
  overlays: any[] = [];
  routeType: string = localStorage.getItem('param') || '';
  userId: string = localStorage.getItem('userId') || '';
  // animalDetails:any[]=[
  //   {name:'',title:''}
  // ]
  constructor(
    private activatedRoute: ActivatedRoute,
    private carService: CarsService,
    private buildingService:BuildingsService,
    private furnitureService:FurnituresService,
    private animalService:AnimalsService
  ) {}

  ngOnInit(): void {
    console.log('route type', this.routeType);
    this.getCategory();
    this.activatedRoute.params.subscribe((result: any) => {
      this.itemId = result['id'];
      this.getItemById(this.itemId);
    });
    this.options = {
      center: { lat: 24.774265, lng: 46.738586 },
      zoom: 5,
    };
  }
  getCategory() {
    console.log(this.category[this.routeType]);
  }
  getItemById(itemId: string) {
    switch (this.routeType) {
      case 'cars':
        this.getCarById(itemId)
        break;
      case 'animals':
        this.getAnimalById(itemId);
        break;
      case 'furnitures':
        this.getFurnitureById(itemId);
        break;
      case 'buildings':
        this.getBuildingById(itemId);
        break;
    }
  }
  getCarById(carId: string){
    this.carService.getCarById(carId).subscribe((result: any) => {
      console.log('car details', result);
      this.itemDetails = result;
      let lat = +this.itemDetails['lat'];
      let lng = +this.itemDetails['long'];
      this.overlays = [
        new google.maps.Marker({
          position: { lat: lat, lng: lng },
          title: 'Konyaalti',
        }),
      ];
    });
  }
  getBuildingById(buildingId:string){
    this.buildingService.getBuildingById(buildingId).subscribe((result:any)=>{
      console.log('building details', result);
      this.itemDetails = result;
      let lat = +this.itemDetails['lat'];
      let lng = +this.itemDetails['long'];
      this.overlays = [
        new google.maps.Marker({
          position: { lat: lat, lng: lng },
          title: 'Konyaalti',
        }),
      ];
    })
  }
  getAnimalById(animalId:string){
    this.animalService.getAnimalById(animalId).subscribe((result:any)=>{
      console.log('animal details', result);
      this.itemDetails = result;
      let lat = +this.itemDetails['lat'];
      let lng = +this.itemDetails['long'];
      this.overlays = [
        new google.maps.Marker({
          position: { lat: lat, lng: lng },
          title: 'Konyaalti',
        }),
      ];
    })
  }
  getFurnitureById(furnitureId:string){
    this.furnitureService.getFurnitureById(furnitureId).subscribe((result:any)=>{
      console.log('furniture details', result);
      this.itemDetails = result;
      let lat = +this.itemDetails['lat'];
      let lng = +this.itemDetails['long'];
      this.overlays = [
        new google.maps.Marker({
          position: { lat: lat, lng: lng },
          title: 'Konyaalti',
        }),
      ];
    })
  }
}
