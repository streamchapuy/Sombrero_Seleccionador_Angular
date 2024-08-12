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

  spinRuleta() {
    if (this.isSpinning) {
      // Si ya está girando, detener el giro lentamente
      this.slowDownRuleta();
    } else {
      // Si no está girando, iniciar el giro
      this.startRuleta();
    }
  }

  startRuleta() {
    this.isSpinning = true;
    const giros = Math.floor(Math.random() * 3) + 10;  
    const anguloFinal = Math.floor(Math.random() * 360);
    const tiempoGiro = 8;  
    const rotacionTotal = giros * 360 + anguloFinal;

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
