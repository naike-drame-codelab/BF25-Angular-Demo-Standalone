import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenFoodService {

  private apiUrl = 'https://world.openfoodfacts.org/api/v3';

  constructor(private http: HttpClient) {}
  
  getProduct(code: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/product/${code}.json`);
  }
}
