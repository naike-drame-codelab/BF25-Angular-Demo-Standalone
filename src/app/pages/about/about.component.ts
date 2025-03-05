import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  LowerCasePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule], //[UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, CurrencyPipe, DecimalPipe]
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  charString: string = 'KHun';
  html: string = '<a href="http://www.google.be">Lien vers Google</a>';
  num: number = 99998.5 / 3;
  date: Date = new Date();
  array: string[] = ['Riri', 'Fifi', 'Loulou'];
  isAdmin: boolean = false;
}
