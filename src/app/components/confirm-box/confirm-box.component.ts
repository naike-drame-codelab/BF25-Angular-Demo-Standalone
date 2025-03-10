import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-box',
  imports: [],
  templateUrl: './confirm-box.component.html',
  styleUrl: './confirm-box.component.scss'
})
export class ConfirmBoxComponent {
  // @Input permet de définir les données/ce qui va être affiché dans le component parent chronometer
  // Ancienne syntaxe
  // @Input()
  // message!: string;
  message = input.required<string>();
  visible = input.required<boolean>();

  // Ancienne syntaxe :
  // @Output()
  // onResponse: EventEmitter<boolean> = new EventEmitter();
  onResponse = output<boolean>();
  
  visibleChange = output<boolean>();

  cancel() {
    //this.visibleChange.emit(false);
    this.onResponse.emit(false);
  }

  confirm() {
    //this.visibleChange.emit(false);
    this.onResponse.emit(true);
  }
}
