import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  private route = new BehaviorSubject<string>('')
  currentRoute = this.route.asObservable()

  private navLinks:any[] = [
    {text:'المزادات',path:'/',icon:`../../../assets/images/icons/auction.svg`},
    {text:'سوق العقارات',path:'/?market=builds',icon:'../../../assets/images/icons/builds.svg'},
    {text:'السيارات',path:'/?market=builds',icon:'../../../assets/images/icons/cars.svg'},
    {text:'الاثاث',path:'/?market=builds',icon:'../../../assets/images/icons/furnitures.svg'},
    {text:'المواشي',path:'/?market=builds',icon:`../../../assets/images/icons/animals.svg`},
    {text:'خدمات مساندة',path:'/',icon:'../../../assets/images/icons/services.svg'},
  ]
  constructor() { }
  getNavlinks(){
    return this.navLinks
  }
  setRoute(currentRoute:string){
    localStorage.setItem('param',currentRoute)
    this.route.next(currentRoute)
  }
}
