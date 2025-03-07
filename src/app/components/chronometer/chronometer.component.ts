import { Component, OnDestroy, OnInit } from '@angular/core';
import { TimerPipe } from '../../pipes/timer.pipe';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';

@Component({
  selector: 'app-chronometer',
  imports: [TimerPipe, ConfirmBoxComponent],
  templateUrl: './chronometer.component.html',
  styleUrl: './chronometer.component.scss',
})
export class ChronometerComponent {
  ms: number = 0;
  idInterval: number | null = null;
  private _memo: number = 0;
  showConfirmBox: boolean = false;

  start() {
    // test de garde : condition à passer pour pouvoir exécuter les instructions suivantes
    // pour empêcher de rappeler la fct start()
    if (this.idInterval) return;

    let start = Date.now() - this._memo;
    this.idInterval = window.setInterval(() => {
      this.ms = Date.now() - start;
    });
  }

  stop() {
    // test de garde
    if (this.idInterval === null) return;

    window.clearInterval(this.idInterval);
    this.idInterval = null;
    this._memo = this.ms;
  }

  reset() {
    if (this.ms === 0) return;
    this.showConfirmBox = true;
  }

  confirmReset(ok: boolean) {
    this.showConfirmBox = false;
    if (ok) {
      this.stop();
      this.ms = 0;
      this._memo = 0;
    }
  }
}
