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

  teams: {name: string, image: string}[] = [
    {name: 'N°602', image:'../../../assets/Img/Escuelas/Nº602.png'},
    {name: 'N°206', image:'../../../assets/Img/Escuelas/N°206.png'},
    {name: 'N°1552', image:'../../../assets/Img/Escuelas/N°1552.png'},
    {name: 'N°281', image:'../../../assets/Img/Escuelas/Nº281.png'},
    {name: 'N°483', image:'../../../assets/Img/Escuelas/N°483.png'},
    {name: 'N°584', image:'../../../assets/Img/Escuelas/N°584.png'},
    {name: 'N°228', image:'../../../assets/Img/Escuelas/N°228.png'},
    {name: 'N°8092', image:'../../../assets/Img/Escuelas/Nº8092.png'},
    {name: 'N°39', image:'../../../assets/Img/Escuelas/N°39.png'},
    {name: 'Nº402', image: '../../../assets/Img/Escuelas/Nº402.png'},
    {name: 'Nº484', image: '../../../assets/Img/Escuelas/Nº484.png'},
    {name: 'Nº368', image: '../../../assets/Img/Escuelas/Nº368.png'},
    {name: 'Nº447', image: '../../../assets/Img/Escuelas/Nº447.png'}
  ];

  currentIndex: number = 0; 
  selectedTeam: string = this.teams[this.currentIndex].name;
  selectTeam(team: {name: string, image: string}) {
    console.log('Equipo seleccionado:', team.name);
    this.teamSelected.emit(team); 
  }
  
  
  removeTeam(teamName: string) {
    this.teams = this.teams.filter(team => {
      return team.name !== teamName;
    });
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
    const walk = x - this.scrollLeft;
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

  prevTeam(){
    this.currentIndex = (this.currentIndex - 1)% this.teams.length;
    this.selectedTeam = this.teams[this.currentIndex].name;
  }

  nextTeam() {
    this.currentIndex = (this.currentIndex + 1) % this.teams.length;
    this.selectedTeam = this.teams[this.currentIndex].name;
  }

  

 
  private getSchoolNameFromPath(path: string): string {
    const fileName = path.split('/').pop() || '';
    const nameWithoutExtension = fileName.replace(/\.[^/.]+$/, "");
    return nameWithoutExtension;
  }
}
