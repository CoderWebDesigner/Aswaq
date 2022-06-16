import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalsService } from 'src/app/shared/services/animals/animals.service';
import { AuctionService } from 'src/app/shared/services/auction/auction.service';
import { BuildingsService } from 'src/app/shared/services/buildings/buildings.service';
import { CarsService } from 'src/app/shared/services/cars/cars.service';
import { FurnituresService } from 'src/app/shared/services/furnitures/furnitures.service';
import { StatesService } from 'src/app/shared/services/states/states.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  items: any[] = [];
  states: any[] = [];
  totalCount!: number;
  pageLinkSize!: number;
  pageSize: number = 5;
  isLoading: boolean = true;
  param!: string;
  filteredOptionsData: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private stateService: StatesService,
    private carService: CarsService,
    private animalService: AnimalsService,
    private furnitureService: FurnituresService,
    private buildingService: BuildingsService,
    private auctionService: AuctionService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.param = params['market'];
      localStorage.setItem('param', this.param);
      localStorage.setItem('userId', '992fceb6-89e2-4985-8695-a3399d4a7b6e');
      this.getStates();
      this.checkRoute(this.param);
    });
  }
  checkRoute(param: string, pageNo: number = 1) {
    switch (param) {
      case 'cars':
        this.getCars(
          pageNo,
          this.pageSize,
          this.filteredOptionsData?.state['id'],
          this.filteredOptionsData?.governorate['id'],
          this.filteredOptionsData?.square['id'],
          this.filteredOptionsData?.carCompany['id'],
          this.filteredOptionsData?.model['id'],
          this.filteredOptionsData?.carType['id'],
          this.filteredOptionsData?.modelYear
        );
        break;
      case 'animals':
        this.getAnimals(
          pageNo,
          this.pageSize,
          this.filteredOptionsData?.state['id'],
          this.filteredOptionsData?.governorate['id'],
          this.filteredOptionsData?.square['id'],
          this.filteredOptionsData?.categoryId['id']
        );
        break;
      case 'furnitures':
        this.getFurnitures(
          pageNo,
          this.pageSize,
          this.filteredOptionsData?.state['id'],
          this.filteredOptionsData?.governorate['id'],
          this.filteredOptionsData?.square['id'],
          this.filteredOptionsData?.categoryId['id']
        );
        break;
      case 'buildings':
        this.getBuildings(pageNo, this.pageSize);
        break;
    }
  }
  // fireFunction(param: string) {
  //   let routes: string[] = [
  //     'getCars',
  //     'getAnimals',
  //     'getFurnitures',
  //     'getBuildings',
  //   ];
  //   let functionName: any[];
  //   functionName = routes.filter((route: string) => {
  //     return route.toLowerCase().search(param) != -1;
  //   });
  //   // this[functionName[0]](1, this.pageSize)
  // }
  getStates() {
    this.stateService.getStates().subscribe((result: any) => {
      this.states = result;
    });
  }
  getAuction(pageCount: number, pageSize: number) {
    // this.auctionService.getAuctions(pageCount, pageSize).subscribe((result: any) => {
    //   this.pageLinkSize = +result.totalPages + 1;
    //   this.totalCount = result.totalCount;
    //   this.items = result.items;
    //   this.isLoading = true;
    // });
  }
  getBuildings(pageCount: number, pageSize: number) {
    this.buildingService
      .getBuildings(pageCount, pageSize)
      .subscribe((result: any) => {
        this.pageLinkSize = +result.totalPages + 1;
        this.totalCount = result.totalCount;
        this.items = result.items;
        this.isLoading = true;
      });
  }
  getFurnitures(
    pageCount: number,
    pageSize: number,
    stateId: string = '',
    governorateId: string = '',
    squareId: string = '',
    categoryId: string = ''
  ) {
    this.furnitureService
      .getFurnitures(
        pageCount,
        pageSize,
        stateId,
        governorateId,
        squareId,
        categoryId
      )
      .subscribe((result: any) => {
        this.pageLinkSize = +result.totalPages + 1;
        this.totalCount = result.totalCount;
        this.items = result.items;
        this.isLoading = true;
      });
  }
  getAnimals(
    pageCount: number,
    pageSize: number,
    stateId: string = '',
    governorateId: string = '',
    squareId: string = '',
    categoryId: string = ''
  ) {
    this.animalService
      .getAnimals(
        pageCount,
        pageSize,
        stateId,
        governorateId,
        squareId,
        categoryId
      )
      .subscribe((result: any) => {
        console.log(result);
        this.pageLinkSize = +result.totalPages + 1;
        this.totalCount = result.totalCount;
        this.items = result.items;
        this.isLoading = true;
      });
  }
  getCars(
    pageCount: number,
    pageSize: number,
    stateId: string = '',
    governorateId: string = '',
    squareId: string = '',
    carCampanyId: string = '',
    carModelId: string = '',
    carTypeId: string = '',
    model: string = ''
  ) {
    this.carService
      .getCars(
        pageCount,
        pageSize,
        stateId,
        governorateId,
        squareId,
        carCampanyId,
        carModelId,
        carTypeId,
        model
      )
      .subscribe((result: any) => {
        this.pageLinkSize = +result.totalPages + 1;
        this.totalCount = result.totalCount;
        this.items = result.items;
        this.isLoading = true;
      });
  }
  paginate(event: any) {
    this.checkRoute(this.param, event.page + 1);
  }
  getFilterData(event: any) {
    console.log('list filter', event);
    this.filteredOptionsData = event;
    switch (this.param) {
      case 'cars':
        this.getCars(
          1,
          this.pageSize,
          event.state['id'],
          event.governorate['id'],
          event.square['id'],
          event.carCompany['id'],
          event.model['id'],
          event.carType['id'],
          event.modelYear
        );
        break;
      case 'animals':
        this.getAnimals(
          1,
          this.pageSize,
          event.state['id'],
          event.governorate['id'],
          event.square['id'],
          event.categoryId['id']
        );
        break;
      case 'furnitures':
        this.getFurnitures(
          1,
          this.pageSize,
          event.state['id'],
          event.governorate['id'],
          event.square['id'],
          event.categoryId['id']
        );
        break;
    }
  }
  filterByState(stateId: string) {
    switch (this.param) {
      case 'cars':
        this.getCars(1, this.pageSize, stateId);
        break;
      case 'animals':
        this.getAnimals(1, this.pageSize, stateId);
        break;
      case 'furnitures':
        this.getFurnitures(1, this.pageSize, stateId);
        break;
    }
  }
}
