import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FurnituresService {

  private furnituresApiUrl='api/furnitureAds';
  private furnituresCategoriesApiUrl=`api/lookups/furnitureCategories`
  private baseUrl=environment.baseUrl;
  constructor(private httpClient:HttpClient) { }
  getFurnitures(pageNumber:number,pageSize:number,stateId:string,governorateId:string,squareId:string,categoryId:string){
    return this.httpClient.get(`${this.baseUrl}${this.furnituresApiUrl}?Paging.PageNumber=${pageNumber}&Paging.PageSize=${pageSize}&StateId=${stateId}&GovernorateId=${governorateId}&SquareId=${squareId}&CategoryId=${categoryId}`)
  }
  getFurnitureById(furnitureId:string){
    return this.httpClient.get(`${this.baseUrl}${this.furnituresApiUrl}/details?Id=${furnitureId}`)
  }
  getFurnituresCategories(){
    return this.httpClient.get(`${this.baseUrl}${this.furnituresCategoriesApiUrl}`)
  }
  addComment(comment:any){
    return this.httpClient.post(
      `${this.baseUrl}${this.furnituresApiUrl}/comment`,
      comment
    );
  }

}
