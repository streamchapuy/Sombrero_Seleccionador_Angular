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

  @Output() teamSelected = new EventEmitter<{name: string, image: string}>();

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
  ];

  selectedTeam: string | null = null;

  // Método para seleccionar un equipo
  selectTeam(team: string) {
    console.log('Equipo seleccionado:', team);
    const nameTeam = this.getSchoolNameFromPath(team);
    this.teamSelected.emit({ name: nameTeam, image: team });
  }

  // Método para eliminar un equipo
  removeTeam(team: string) {
    this.teams = this.teams.filter(t => t !== team);
  }

  // Inicia el arrastre
  startDrag(event: MouseEvent) {
    this.isDragging = true;
    const target = event.currentTarget as HTMLElement;
    this.startX = event.pageX - target.scrollLeft;
    this.scrollLeft = target.scrollLeft;
  }

  // Realiza el arrastre
  onDrag(event: MouseEvent) {
    if (!this.isDragging) return;
    const x = event.pageX - this.startX;
    const target = event.currentTarget as HTMLElement;
    const walk = x - this.scrollLeft;
    target.scrollLeft = this.scrollLeft - walk;
  }

  // Detiene el arrastre
  stopDrag() {
    this.isDragging = false;
  }

  // Maneja el desplazamiento con la rueda del ratón
  onWhell(event: WheelEvent) {
    const target = event.currentTarget as HTMLElement;
    target.scrollLeft += event.deltaY;
    event.preventDefault();
  }

  // Extrae el nombre del equipo desde la ruta de la imagen
  private getSchoolNameFromPath(path: string): string {
    const fileName = path.split('/').pop() || '';
    const nameWithoutExtension = fileName.replace(/\.[^/.]+$/, "");
    return nameWithoutExtension;
  }
}
