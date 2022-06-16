import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-advertisement-details',
  templateUrl: './car-advertisement-details.component.html',
  styleUrls: ['./car-advertisement-details.component.scss']
})
export class CarAdvertisementDetailsComponent implements OnInit {

  @Input() itemInfo:any
  constructor() { }

  ngOnInit(): void {
  }

}
