import { Component, EventEmitter, Output, ViewChild, viewChild } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

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
  casaSeleccionada: string = '';

  @Output() houseSelected = new EventEmitter<string>();
  


  casas: string[] = ['Ravenclaw', 'Slytherin', 'Gryffindor', 'Hufflepuff'];

  spinRuleta() {
    if (this.isSpinning) {
      return;
    }

    console.log('Ruleta girando');
    this.isSpinning = true;
    this.showBubble = true; 
    this.casaSeleccionada = 'mmmmm...'; 

    const girosCompletos = 5;
    const anguloFinal = Math.floor(Math.random() * 360);
    const rotacionTotal = girosCompletos * 360 + anguloFinal;

    this.anguloActual += rotacionTotal;

    this.transitionStyle = `transform ${this.tiempoGiro}s cubic-bezier(0.33, 1, 0.68, 1)`;
    this.transformStyle = `rotate(${this.anguloActual}deg)`;

    setTimeout(() => {      
      this.isSpinning = false; 
      this.calcularCasa(this.anguloActual);
      this.showBubble = true; 
      console.log(`Casa seleccionada: ${this.casaSeleccionada}`);
      this.houseSelected.emit(this.casaSeleccionada);

      
      setTimeout(() => {
        this.showBubble = false;
      }, 2000); 

    }, this.tiempoGiro * 1000); 
  }

  calcularCasa(angulo: number) {
    const anguloNormalizado = angulo % 360;    
    if (anguloNormalizado >= 0 && anguloNormalizado < 90) {
      this.casaSeleccionada = 'Gryffindor'; 
    } else if (anguloNormalizado >= 90 && anguloNormalizado < 180) {
      this.casaSeleccionada = 'Hufflepuff'; 
    } else if (anguloNormalizado >= 180 && anguloNormalizado < 270) {
      this.casaSeleccionada = 'Slytherin'; 
    } else {
      this.casaSeleccionada = 'Ravenclaw'; 
    }
  }
}
