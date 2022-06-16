import { Component, OnInit } from '@angular/core';
import { NavService } from '../../services/nav/nav.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isCollapsed:boolean=true;
  constructor(private navService:NavService) { }

  ngOnInit(): void {
  }
  getNavPath(path:string){
    this.navService.setRoute(path)
  }
  toggleNavbar(){
    this.isCollapsed= !this.isCollapsed
  }

}
