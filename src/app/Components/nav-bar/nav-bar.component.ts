import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  isDragging = false;
  startX: number = 0;
  scrollLeft: number = 0;

  @Output() teamSelected = new EventEmitter<string>();

  teams: string[] = [
    '../../../assets/Img/Escuelas/Miguel.png',
    '../../../assets/Img/Escuelas/N°39.png',
    '../../../assets/Img/Escuelas/N°483.png',
    '../../../assets/Img/Escuelas/N°552.png',
    '../../../assets/Img/Escuelas/UTN.png',
    '../../../assets/Img/Escuelas/UTN(test).png',
    '../../../assets/Img/Escuelas/N°552 - copia.png',
    '../../../assets/Img/Escuelas/N°552 - copia (3).png',
    '../../../assets/Img/Escuelas/N°552 - copia (4).png',
    '../../../assets/Img/Escuelas/N°552 - copia (5).png',
    '../../../assets/Img/Escuelas/N°552 - copia (6).png',
    '../../../assets/Img/Escuelas/N°552 - copia (2).png'
  ]

  selectedTeam: string | null = null;


  selectTeam(team: string) {
    console.log('Equipo seleccionado:', team);
    this.teamSelected.emit(team);
    
  }

  removeTeam(team: string) {
    this.teams = this.teams.filter(t => t !== team);
  }

  startDrag(event: MouseEvent) {
    this.isDragging = true;
    const target = event.currentTarget as HTMLElement;
    this.startX = event.pageX - target.scrollLeft;
    this.scrollLeft = target.scrollLeft;
  }

  onDrag(event: MouseEvent) {
    if (!this.isDragging) return;
    const x = event.pageX - this.startX;
    const target = event.currentTarget as HTMLElement;
    const walk = x - this.scrollLeft; // Desplazamiento del cursor
    target.scrollLeft = this.scrollLeft - walk;
  }

  stopDrag() {
    this.isDragging = false;
  }

  onWhell(event: WheelEvent) {
    const target = event.currentTarget as HTMLElement;
    target.scrollLeft += event.deltaY;
    event.preventDefault();
  }
}
