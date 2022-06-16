import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-add-advertisement',
  templateUrl: './add-advertisement.component.html',
  styleUrls: ['./add-advertisement.component.scss'],
})
export class AddAdvertisementComponent implements OnInit {
  steps!: MenuItem[];
  constructor() {}

  ngOnInit(): void {
    this.steps = [
      {
        label: 'نوع الاعلان',
        styleClass: 'type-icon',
      },
      {
        label: 'اتفاقية العموله',
        styleClass: 'agreement-icon',
      },
      {
        label: 'البيانات المكان',
        styleClass: 'location-icon',
      },
      {
        label: 'بيانات الاعلان',
        styleClass: 'data-icon',
      },
      {
        label: 'نشر الاعلان',
        styleClass: 'check-icon',
      },
    ];
  }
}
