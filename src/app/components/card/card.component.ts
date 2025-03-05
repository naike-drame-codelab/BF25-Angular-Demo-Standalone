import { Component, Input } from '@angular/core';
import { CardModel } from '../../models/card.model';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [UpperCasePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() 
  //data!: CardModel; // == CardModel | undefined == null!; en C# - "tkt, on va l'utiliser sous peu"
  data: CardModel = {
    title: 'Title',
    description: 'Default description',
    imageUrl: 'https://picsum.photos/200'
  }
}
