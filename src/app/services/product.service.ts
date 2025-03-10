import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductResult } from '../models/product-result.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  HttpClient = inject(HttpClient);

  constructor() { }

  search(barCode: string){
    return this.HttpClient
        .get<ProductResult>(`https://world.openfoodfacts.org/api/v3/product/${barCode}.json`);
  }
}
