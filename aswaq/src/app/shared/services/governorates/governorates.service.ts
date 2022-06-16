import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GovernoratesService {
  private baseUrl=environment.baseUrl
  private getGovernoratesApiUrl='api/lookups/governorates'
  constructor(private httpClient:HttpClient) { }
  getGovernorates(stateId:string){
    return this.httpClient.get(`${this.baseUrl}${this.getGovernoratesApiUrl}?stateId=${stateId}`)
  }
}
