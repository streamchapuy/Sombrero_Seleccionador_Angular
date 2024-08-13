import { Component } from '@angular/core';

@Component({
  selector: 'app-ruleta',
  templateUrl: './ruleta.component.html',
  styleUrls: ['./ruleta.component.css']
})
export class RuletaComponent {
  transformStyle = 'rotate(0deg)';
  transitionStyle = '';
  isSpinning = false;
  tiempoGiro = 5;
  anguloActual = 0;

  spinRuleta() {
    if (this.isSpinning) {
      return;
    }

    console.log('Ruleta girando');
    this.isSpinning = true;

    const girosCompletos = 5;
    const anguloFinal = Math.floor(Math.random() * 360);
    const rotacionTotal = girosCompletos * 360 + anguloFinal;


    this.anguloActual += rotacionTotal;

    this.transitionStyle = `transform ${this.tiempoGiro}s cubic-bezier(0.33, 1, 0.68, 1)`;
    this.transformStyle = `rotate(${this.anguloActual}deg)`;

    setTimeout(() => {
      this.isSpinning = false; 
    }, this.tiempoGiro * 1000); 
  }
}
