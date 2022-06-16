import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatesService {
  private baseUrl=environment.baseUrl
  private getStatesApiUrl='api/lookups/states'
  constructor(private httpClient:HttpClient) { }
  getStates(){
    return this.httpClient.get(`${this.baseUrl}${this.getStatesApiUrl}`)
  }
}
