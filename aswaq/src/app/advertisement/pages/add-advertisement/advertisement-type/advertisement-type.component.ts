import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-advertisement-type',
  templateUrl: './advertisement-type.component.html',
  styleUrls: ['./advertisement-type.component.scss'],
})
export class AdvertisementTypeComponent implements OnInit {
  submitted:boolean=false
  constructor(private router:Router) {}

  ngOnInit(): void {}
  nextPage() {
    this.router.navigate(['advertisement/add-advertisement/agreement']);
    this.submitted = true;
  }
}
