import { Component, inject } from '@angular/core';
import { ShoppingService } from '../../../services/shopping.service';
import { ConfirmBoxComponent } from '../../confirm-box/confirm-box.component';
import { ProductModel } from '../../../models/product.model';

@Component({
  selector: 'app-shopping-list',
  imports: [ConfirmBoxComponent],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss',
})
export class ShoppingListComponent {
  shoppingService = inject(ShoppingService);
  // showConfirmBox: boolean = false;

  get productsList() {
    return this.shoppingService.getList();
  }

  delete(item: ProductModel) {
    item.showConfirm = true;
  }

  confirmDelete(ok: boolean, item: ProductModel) {
    item.showConfirm = false;
    if (ok) {
      this.shoppingService.delete(item);
    }
  }
}
