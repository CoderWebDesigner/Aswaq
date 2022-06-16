import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  private animalsApiUrl = 'api/animalAds';
  private animalCategoriesApiUrl = 'api/lookups/animalCategories';
  private baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) {}
  getAnimals(
    pageNumber: number,
    pageSize: number,
    stateId: string,
    governorateId: string,
    squareId: string,
    categoryId: string
  ) {
    return this.httpClient.get(
      `${this.baseUrl}${this.animalsApiUrl}?Paging.PageNumber=${pageNumber}&Paging.PageSize=${pageSize}&StateId=${stateId}&GovernorateId=${governorateId}&SquareId=${squareId}&CategoryId=${categoryId}`
    );
  }
  getAnimalById(animalId: string) {
    return this.httpClient.get(
      `${this.baseUrl}${this.animalsApiUrl}/details?Id=${animalId}`
    );
  }
  getAnimalCategories() {
    return this.httpClient.get(`${this.baseUrl}${this.animalCategoriesApiUrl}`);
  }
  addComment(comment: any) {
    return this.httpClient.post(
      `${this.baseUrl}${this.animalsApiUrl}/comment`,
      comment
    );
  }
}
