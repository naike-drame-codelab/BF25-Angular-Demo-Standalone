import { Component } from '@angular/core';
import { AddFormComponent } from "../../components/shopping/add-form/add-form.component";
import { ShoppingListComponent } from "../../components/shopping/shopping-list/shopping-list.component";

@Component({
  imports: [AddFormComponent, ShoppingListComponent],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.scss'
})
export class ShoppingComponent {
  
}
