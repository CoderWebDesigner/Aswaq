import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-advertisement-details',
  templateUrl: './animal-advertisement-details.component.html',
  styleUrls: ['./animal-advertisement-details.component.scss']
})
export class AnimalAdvertisementDetailsComponent implements OnInit {
  @Input() itemInfo:any
  constructor() { }

  ngOnInit(): void {
  }

}
