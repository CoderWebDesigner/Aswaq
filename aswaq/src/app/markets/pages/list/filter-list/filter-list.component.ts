import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavService } from 'src/app/shared/services/nav/nav.service';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss'],
})
export class FilterListComponent implements OnInit {
  @Output() onFilter = new EventEmitter();
  param:any;
  constructor(private navService:NavService) {}
  ngOnInit(): void {
    console.log(this.param)
    this.navService.currentRoute.subscribe((result:string)=>{
      console.log('param',result)
      this.param = result || localStorage.getItem('param')
    })
  }
  filter(event:any){
    this.onFilter.emit(event)
  }
}
