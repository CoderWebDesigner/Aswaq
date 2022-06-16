import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GovernoratesService } from 'src/app/shared/services/governorates/governorates.service';
import { StatesService } from 'src/app/shared/services/states/states.service';

@Component({
  selector: 'app-buildings-filter',
  templateUrl: './buildings-filter.component.html',
  styleUrls: ['./buildings-filter.component.scss']
})
export class BuildingsFilterComponent implements OnInit {
  @Output() onBuildingsFilter = new EventEmitter();
  filterForm!: FormGroup;
  states: any[] = [];
  cities: any[] = [];
  constructor(private stateService:StatesService,private governoratesService:GovernoratesService) { }

  ngOnInit(): void {
    this.filterForm = new FormGroup({
      state: new FormControl(''),
      governorate: new FormControl(''),
      type: new FormControl('')
    })
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
  getSelectedState(event: any) {
    this.getGovernorates(event.value['id']);
  }
  filter(){

  }

}
