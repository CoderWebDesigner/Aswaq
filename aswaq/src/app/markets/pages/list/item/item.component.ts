import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AdvertismentType } from 'src/app/shared/enums/advertisment-type';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit,OnChanges {
  @Input() data:any;
  @Input() dataLoaded!:number;
  imgLoading:boolean=true
  advertiseType:any= AdvertismentType;
  arabicMonths:string[]=[
    'يناير',
    'فبراير',
    'مارس',
    'ابريل',
    'مايو',
    'يونيو',
    'يوليو',
    'اغسطس',
    'سبتمبر',
    'اكتوبر',
    'نوفمبر',
    'ديسمبر'
  ]
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
      // console.log(changes)
  }
  splitDate(date:string){
    let splitedArray = date.split('-')
    let d = new Date(`${splitedArray[2]}-${splitedArray[1]}-${splitedArray[0]}`)
    let newDate=`${d.getDate()} ${this.arabicMonths[d.getMonth()]} ${d.getFullYear()}`
    return newDate
  }
  loadingImg(){
    this.imgLoading =false
  }
}
