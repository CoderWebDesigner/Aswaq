import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advertisement-agreement',
  templateUrl: './advertisement-agreement.component.html',
  styleUrls: ['./advertisement-agreement.component.scss']
})
export class AdvertisementAgreementComponent implements OnInit {
  selectedValue:boolean = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  nextPage(){
    this.router.navigate(['advertisement/add-advertisement/'])
  }
  previousPage(){
    this.router.navigate(['advertisement/add-advertisement/agreement']);
  }
}
