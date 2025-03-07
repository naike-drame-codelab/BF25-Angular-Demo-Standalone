import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule, CommonModule],
  templateUrl: './bmi.component.html',
  styleUrl: './bmi.component.scss'
})
export class BmiComponent {
  height: number = 0;
  weight: number = 0;
  
  // propriété calculée via un getter
  // IMC = Poids / Taille x Taille
  get bmi() {
    return this.weight / (this.height / 100)**2
  }
}
