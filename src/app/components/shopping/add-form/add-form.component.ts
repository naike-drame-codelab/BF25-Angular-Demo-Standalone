import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ShoppingService } from '../../../services/shopping.service';

@Component({
  selector: 'app-add-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.scss'
})
export class AddFormComponent {

  shoppingService = inject(ShoppingService);

  addForm = new FormGroup({
    productName: new FormControl('', Validators.required),
    isImportant: new FormControl(false)
  })

  add(){
    if(!this.addForm.value.productName?.trim()) return;

    this.shoppingService.add(
      this.addForm.value.productName.trim() ?? '',
      this.addForm.value.isImportant ?? false,
    )
    this.addForm.reset();
  }
}
