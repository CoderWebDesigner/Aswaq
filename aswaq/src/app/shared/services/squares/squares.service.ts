import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SquaresService {
  private squares = new BehaviorSubject<Array<any>>([]);
  currentSquares = this.squares.asObservable();
  private baseUrl=environment.baseUrl
  private getSquaresApiUrl='api/lookups/squares'
  constructor(private httpClient:HttpClient) { }
  setSqaures(data: any) {
    this.squares.next(data)
  }
  getSquares(governorateId:string){
    return this.httpClient.get(`${this.baseUrl}${this.getSquaresApiUrl}?governorateId=${governorateId}`)
  }
}
