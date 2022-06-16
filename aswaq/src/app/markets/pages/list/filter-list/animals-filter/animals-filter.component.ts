import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AnimalsService } from 'src/app/shared/services/animals/animals.service';
import { CarsService } from 'src/app/shared/services/cars/cars.service';
import { GovernoratesService } from 'src/app/shared/services/governorates/governorates.service';
import { SquaresService } from 'src/app/shared/services/squares/squares.service';
import { StatesService } from 'src/app/shared/services/states/states.service';

@Component({
  selector: 'app-animals-filter',
  templateUrl: './animals-filter.component.html',
  styleUrls: ['./animals-filter.component.scss'],
})
export class AnimalsFilterComponent implements OnInit {
  @Output() onAnimalFilter = new EventEmitter();
  filterForm!: FormGroup;
  states: any[] = [];
  cities: any[] = [];
  squares: any[] = [];
  animalCategories: any[] = [];
  constructor(
    private statesService: StatesService,
    private governoratesService: GovernoratesService,
    private squareService: SquaresService,
    private animalService: AnimalsService
  ) {}

  ngOnInit(): void {
    this.filterForm = new FormGroup({
      state: new FormControl(''),
      governorate: new FormControl(''),
      square: new FormControl(''),
      categoryId: new FormControl(''),
    });

    this.getStates();
    this.getAnimalCategories()
  }
  getAnimalCategories() {
    this.animalService.getAnimalCategories().subscribe((result: any) => {
      this.animalCategories = result;
      console.log('categories',result)
    });
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
  filter() {
    console.log(this.filterForm.value);
    this.onAnimalFilter.emit(this.filterForm.value);
  }
}
