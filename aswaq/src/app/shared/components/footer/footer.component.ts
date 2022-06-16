import { Component, OnInit } from '@angular/core';
import { NavService } from '../../services/nav/nav.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  routes:any[]=[]
  constructor(private navService:NavService) { }

  ngOnInit(): void {
    this.routes = this.navService.getNavlinks()
  }

}
