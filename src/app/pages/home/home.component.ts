import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { CardModel } from '../../models/card.model';

@Component({
  selector: 'app-home',
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  data: CardModel[] = [
    {
      title: 'Pikachu',
      description: 'Electric Pokemon',
      imageUrl:
        'https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/16232990/rev_1_PDP_TRL2_093_High_Res_JPEG.jpeg?quality=90&strip=all&crop=18.575418994413,0,62.849162011173,100',
    },
    {
      title: 'Charizard',
      description: 'Fire/Dragon Pokemon',
      imageUrl:
        'https://i.redd.it/0hqaxymclcz91.jpg',
    },
  ];
}
