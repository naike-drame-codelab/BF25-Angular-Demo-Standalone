import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { KebabCasePipe } from '../../pipes/kebab-case.pipe';
import { SlicePipe } from '../../pipes/slice.pipe';

@Component({
  selector: 'app-about',
  imports: [CommonModule, KebabCasePipe, SlicePipe], //[UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, CurrencyPipe, DecimalPipe]
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  charString: string = 'KHun';
  charString2: string = 'KHun LY';
  html: string = '<a href="http://www.google.be">Lien vers Google</a>';
  num: number = 99998.5 / 3;
  date: Date = new Date();
  array: string[] = ['Riri', 'Fifi', 'Loulou'];
  isAdmin: boolean = false;
  duration: number = 324;

  method(){
    alert();
  }
}
