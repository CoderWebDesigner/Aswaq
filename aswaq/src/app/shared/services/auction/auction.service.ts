import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  constructor(private httpClient:HttpClient) { }
  getAuctions(pageNumber:number,pageSize:number){

  }
}
