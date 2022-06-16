import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BuildingsService {
  private baseUrl= environment.baseUrl;
  private buildingApiUrl='api/advertisementBuildings'
  constructor(private httpClient:HttpClient) { }
  getBuildings(pageNumber:number,pageSize:number){
    return this.httpClient.get(`${this.baseUrl}${this.buildingApiUrl}?Paging.PageNumber=${pageNumber}&Paging.PageSize=${pageSize}`)
  }
  getBuildingById(buildingId:string){
    return this.httpClient.get(`${this.baseUrl}${this.buildingApiUrl}/details?Id=${buildingId}`)
  }
}
