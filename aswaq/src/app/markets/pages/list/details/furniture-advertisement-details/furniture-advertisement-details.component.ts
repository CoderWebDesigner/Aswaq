import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-furniture-advertisement-details',
  templateUrl: './furniture-advertisement-details.component.html',
  styleUrls: ['./furniture-advertisement-details.component.scss']
})
export class FurnitureAdvertisementDetailsComponent implements OnInit {
  @Input() itemInfo:any
  constructor() { }

  ngOnInit(): void {
  }

}
