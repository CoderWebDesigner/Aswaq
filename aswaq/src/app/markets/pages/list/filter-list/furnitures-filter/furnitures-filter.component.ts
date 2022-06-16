import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FurnituresService } from 'src/app/shared/services/furnitures/furnitures.service';
import { GovernoratesService } from 'src/app/shared/services/governorates/governorates.service';
import { SquaresService } from 'src/app/shared/services/squares/squares.service';
import { StatesService } from 'src/app/shared/services/states/states.service';

@Component({
  selector: 'app-furnitures-filter',
  templateUrl: './furnitures-filter.component.html',
  styleUrls: ['./furnitures-filter.component.scss'],
})
export class FurnituresFilterComponent implements OnInit {
  @Output() onFurnituresFilter = new EventEmitter();
  filterForm!: FormGroup;
  states: any[] = [];
  cities: any[] = [];
  squares: any[] = [];
  furnitureCategories: any[] = [];
  status: string[] = ['مستعمل', 'جديد'];
  constructor(
    private stateService: StatesService,
    private squareService:SquaresService,
    private governoratesService: GovernoratesService,
    private furnitureService: FurnituresService
  ) {}

  ngOnInit(): void {
    this.filterForm = new FormGroup({
      state: new FormControl(''),
      governorate: new FormControl(''),
      square: new FormControl(''),
      categoryId: new FormControl(''),
      status: new FormControl(''),
    });
    this.getStates();
    this.getFurnitureCateogies();
  }
  getStates() {
    this.stateService.getStates().subscribe((result: any) => {
      this.states = result;
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
  getFurnitureCateogies() {
    this.furnitureService.getFurnituresCategories().subscribe((result: any) => {
      this.furnitureCategories = result;
    });
  }
  getSquares(governorateId: string) {
    this.squareService.getSquares(governorateId).subscribe((result: any) => {
      this.squares = result;
      this.squareService.setSqaures(result);
    });
  }
  getSelectedState(event: any) {
    this.getGovernorates(event.value['id']);
  }
  getSelectedGovernorates(event: any) {
    this.getSquares(event.value['id']);
  }
  filter() {
    this.onFurnituresFilter.emit(this.filterForm.value);
  }
}
