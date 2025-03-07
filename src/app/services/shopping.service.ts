import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  list: ProductModel[] = [];

  constructor() {}

  add(productName: string, isImportant: boolean) {
    console.log(
      `Product received: productName: ${productName}, isImportant: ${isImportant}.`
    );

    this.list.push({ productName, isImportant });
  }

  delete(item: ProductModel) {
    //this.list.splice(index, 1);
    this.list = this.list.filter((i) => i !== item);
  }

  getList() {
    return this.list;
  }
}
