import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.scss']
})
export class RelatedComponent implements OnInit {
  @Input() relatedItemData:any;
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
  splitDate(date:string){
    let splitedArray = date.split('-')
    let d = new Date(`${splitedArray[2]}-${splitedArray[1]}-${splitedArray[0]}`)
    let newDate=`${d.getDate()} ${this.arabicMonths[d.getMonth()]} ${d.getFullYear()}`
    return newDate
  }
}
