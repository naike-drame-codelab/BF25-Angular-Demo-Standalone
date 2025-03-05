import { Component, OnDestroy, OnInit } from '@angular/core';
import { TimerPipe } from "../../pipes/timer.pipe";

@Component({
  selector: 'app-chronometer',
  imports: [TimerPipe],
  templateUrl: './chronometer.component.html',
  styleUrl: './chronometer.component.scss',
})
export class ChronometerComponent {
  ms: number = 0;
  idInterval: number | null = null;
  memo: number = 0;

  start() {
    // test de garde : condition à passer pour pouvoir exécuter les instructions suivantes
    // pour empêcher de rappeler la fct start()
    if (this.idInterval) return;

    let start = Date.now() - this.memo;
    this.idInterval = window.setInterval(() => {
      this.ms = Date.now() - start;
    });
  }

  stop() {
    // test de garde 
    if (this.idInterval === null) return;

    window.clearInterval(this.idInterval);
    this.idInterval = null;
    this.memo = this.ms;
  }

  reset() {
    if(this.ms === 0) return;

    this.stop();
    this.ms = 0;
    this.memo = 0;
  }
}
