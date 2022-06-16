import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  private _carsApiUrl = 'api/carAdvertisements';
  private _carCompaniesApiUrl = 'api/lookups/carCompanies';
  private _carModelsApiUrl = 'api/lookups/carBrands';
  private _carTypesApiUrl = 'api/lookups/carType';
  private baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) {}
  getCars(
    pageNumber: number,
    pageSize: number,
    stateId: string,
    governorateId: string,
    squareId: string,
    carCampanyId: string,
    carModelId: string,
    carTypeId:string,
    model: string
  ) {
    return this.httpClient.get(
      `${this.baseUrl}${this._carsApiUrl}?Paging.PageNumber=${pageNumber}&Paging.PageSize=${pageSize}&StateId=${stateId}&GovernorateId=${governorateId}&SquareId=${squareId}&CompanyId=${carCampanyId}&BrandId=${carModelId}&CarTypeId=${carTypeId}&Model=${model}`
    );
  }
  getCarById(carId: string) {
    return this.httpClient.get(
      `${this.baseUrl}${this._carsApiUrl}/details?id=${carId}`
    );
  }
  getCarCompanies() {
    return this.httpClient.get(`${this.baseUrl}${this._carCompaniesApiUrl}`);
  }
  getCarModels(carCampanyId: string) {
    return this.httpClient.get(
      `${this.baseUrl}${this._carModelsApiUrl}?companyId=${carCampanyId}`
    );
  }
  getCarTypes(){
    return this.httpClient.get(`${this.baseUrl}${this._carTypesApiUrl}`)
  }
  addComment(comment: any) {
    return this.httpClient.post(
      `${this.baseUrl}${this._carsApiUrl}/comments`,
      comment
    );
  }
  addReplay(commentId:string,replay:string) {
    return this.httpClient.put(`${this.baseUrl}${this._carsApiUrl}/replay?Id=${commentId}&Replay=${replay}`,'')
  }
}
