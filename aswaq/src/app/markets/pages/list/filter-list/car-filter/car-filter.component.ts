import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CarsService } from 'src/app/shared/services/cars/cars.service';
import { GovernoratesService } from 'src/app/shared/services/governorates/governorates.service';
import { SquaresService } from 'src/app/shared/services/squares/squares.service';
import { StatesService } from 'src/app/shared/services/states/states.service';

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.scss']
})
export class CarFilterComponent implements OnInit {

  @Output() onCarFilter = new EventEmitter();
  filterForm!: FormGroup;
  states: any[] = [];
  cities: any[] = [];
  squares: any[] = [];
  carCompanies: any[] = [];
  carsModel:any[]=[]
  carTypes: any[] = [];
  modelYears: any[] = [];
  constructor(
    private statesService: StatesService,
    private governoratesService: GovernoratesService,
    private squareService: SquaresService,
    private carService:CarsService
  ) {}

  ngOnInit(): void {
    this.filterForm = new FormGroup({
      state: new FormControl(''),
      governorate: new FormControl(''),
      square: new FormControl(''),
      carCompany: new FormControl(''),
      model: new FormControl(''),
      carType:new FormControl(''),
      modelYear: new FormControl(''),
    });

    this.getModelYears();
    this.getStates();
    this.getCarCompanies()
    this.getCarTypes()
  }
  getModelYears() {
    let currentYear = new Date().getFullYear();
    for (let i = currentYear + 1; i >= currentYear - 50; i--) {
      this.modelYears.push({ name: i });
    }
  }
  getStates() {
    this.statesService.getStates().subscribe((result: any) => {
      this.states = result;
    });
  }
  getSelectedState(event: any) {
    this.getGovernorates(event.value['id']);
  }
  getSelectedGovernorates(event: any) {
    this.getSquares(event.value['id']);
  }
  getSelectedCarCompany(event:any){
    this.getCarModels(event.value['id'])
  }

  getSquares(governorateId: string) {
    this.squareService.getSquares(governorateId).subscribe((result: any) => {
      this.squares = result;
      this.squareService.setSqaures(result);
    });
  }
  getGovernorates(stateId: string) {
    this.governoratesService
      .getGovernorates(stateId)
      .subscribe((result: any) => {
        this.cities = result;
        console.log('governorate', result);
      });
  }
  getCarCompanies(){
    this.carService.getCarCompanies().subscribe((result:any)=>{
      this.carCompanies=result
    })
  }
  getCarModels(carCampanyId:string){
    this.carService.getCarModels(carCampanyId).subscribe((result:any)=>{
      this.carsModel=result
    })
  }
  getCarTypes(){
    this.carService.getCarTypes().subscribe((result:any)=>{
      this.carTypes=result
    })
  }
  filter() {
    console.log(this.filterForm.value)
    this.onCarFilter.emit(this.filterForm.value);
  }

}
