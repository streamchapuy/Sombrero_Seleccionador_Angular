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
  anguloActual = 0;

  spinRuleta() {
    if (!!this.isSpinning) {
      this.startRuleta();      
    } else {
      this.slowDownRuleta();
      
    }
  }

  startRuleta() {
    this.isSpinning = true;
    const giros = Math.floor(Math.random() * 3) + 6;  
    const anguloFinal = Math.floor(Math.random() * 360);
    const tiempoGiro = 8;  
    const rotacionTotal = giros * 360 + anguloFinal;

    this.anguloActual += rotacionTotal;


    this.transitionStyle = `transform ${tiempoGiro}s cubic-bezier(0.33, 1, 0.68, 1)`;
    this.transformStyle = `rotate(${rotacionTotal}deg)`;
  }

  slowDownRuleta() {
    const tiempoDesaceleracion = 6;  
        this.transitionStyle = `transform ${tiempoDesaceleracion}s ease-out`;
    this.transformStyle = `rotate(${parseFloat(this.transformStyle.replace('rotate(', '').replace('deg)', '')) + 360}deg)`;
    
    setTimeout(() => {
      this.isSpinning = false;
    }, tiempoDesaceleracion * 1000);
  }
}
