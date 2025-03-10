import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { OpenFoodService } from '../../services/open-food.service';
import { ProductResult } from '../../models/product-result.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-page',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent {
  // HttpClient = inject(HttpClient);
  // openFoodService = inject(OpenFoodService);
  // product: any = undefined;

  // searchForm = new FormGroup({
  //   searchTerm: new FormControl(''),
  // });

  // search() {
  //   const query = this.searchForm.get('searchTerm')?.value;
  //   if (query) {
  //     this.openFoodService.getProduct(query)
  //     .subscribe((response) => {
  //       this.product = response.product || undefined;
  //     });
  //     console.log(this.product);
  //   }
  // }

  HttpClient = inject(HttpClient);
  productService = inject(ProductService);
  barCode: string | null = null;
  result: ProductResult | null = null;

  search() {
    if(!this.barCode) return;
    
    this.productService.search(this.barCode)
    .subscribe({
      next: (data) => (this.result = data),
      error: () => this.result = <ProductResult>{ status: 'error' },
    });
  }
}
