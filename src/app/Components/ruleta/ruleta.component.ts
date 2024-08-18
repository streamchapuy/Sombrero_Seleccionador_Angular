import { Component, EventEmitter, Output } from '@angular/core';

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
  showBubble = false;

  @Output() houseSelected = new EventEmitter<string>();



  casas: string[] = ['Ravenclaw', 'Slytherin', 'Gryffindor', 'Hufflepuff'];
  casaSeleccionada: string = 'mmmmm...';

  spinRuleta() {
    if (this.isSpinning) {
      return;
    }
    console.log('Ruleta girando');
    this.isSpinning = true;
    this.showBubble = true;

    const girosCompletos = 5;
    const anguloFinal = Math.floor(Math.random() * 360);
    const rotacionTotal = girosCompletos * 360 + anguloFinal;

    this.anguloActual += rotacionTotal;

    this.transitionStyle = `transform ${this.tiempoGiro}s cubic-bezier(0.33, 1, 0.68, 1)`;
    this.transformStyle = `rotate(${this.anguloActual}deg)`;

    setTimeout(() => {
      this.isSpinning = false; 
      this.calcularCasa(this.anguloActual);
      console.log(`Casa seleccionada: ${this.casaSeleccionada}`);
      this.showBubble = false;
      this.houseSelected.emit(this.casaSeleccionada);
    }, this.tiempoGiro * 1000); 
  }

  calcularCasa(angulo: number) {
    const anguloNormalizado = angulo % 360; // Asegúrate de que el ángulo esté entre 0 y 360

    // Ajusta el rango según el orden y la distribución de las casas en la ruleta
    if (anguloNormalizado >= 0 && anguloNormalizado < 90) {
      this.casaSeleccionada = 'Gryffindor'; // Imagen en la posición 0-90 grados
    } else if (anguloNormalizado >= 90 && anguloNormalizado < 180) {
      this.casaSeleccionada = 'Hufflepuff'; // Imagen en la posición 90-180 grados
    } else if (anguloNormalizado >= 180 && anguloNormalizado < 270) {
      this.casaSeleccionada = 'Slytherin'; // Imagen en la posición 180-270 grados
    } else {
      this.casaSeleccionada = 'Ravenclaw'; // Imagen en la posición 270-360 grados
    }
  }
}
