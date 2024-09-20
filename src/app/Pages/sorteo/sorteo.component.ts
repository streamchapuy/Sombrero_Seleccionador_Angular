import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NavBarComponent } from '../../Components/nav-bar/nav-bar.component';
import { RuletaComponent } from '../../Components/ruleta/ruleta.component';
import { HarrySongService } from '../../../services/harry-song.service';

@Component({
  selector: 'app-sorteo',
  templateUrl: './sorteo.component.html',
  styleUrls: ['./sorteo.component.css']
})


export class SorteoComponent {
  @ViewChild('navBar') navBarComponent!: NavBarComponent;
  @ViewChild('ruleta') ruletaComponent!: RuletaComponent;
  constructor(private HarrySongService: HarrySongService){}
  volume: number = 0.5; 
  
  equiposPorCasa: { [key: string]: string[] } = {
    Gryffindor: [],
    Hufflepuff: [],
    Ravenclaw: [],
    Slytherin: []
  };

  selectedTeam: string = '';
  selectedHouse: string | null = null;
  selectedSchoolName: string | null = null;

  onTeamSelected(team: { name: string, image: string }) {
    this.selectedSchoolName = team.name;
    this.selectedTeam = team.image;
    console.log('Escuela seleccionada:', this.selectedTeam);
  }
  
  onHouseSelected(house: string) {
    this.selectedHouse = house;
    this.assignTeamToHouse();
  }
  

  assignTeamToHouse() {
    if (this.selectedTeam && this.selectedHouse) {
      const houseTeams = this.equiposPorCasa[this.selectedHouse];

      if (houseTeams.length < 3) {
        if (!houseTeams.includes(this.selectedTeam)) {
          houseTeams.push(this.selectedTeam);
          this.updateTeamList();

          if (this.navBarComponent) {
            this.navBarComponent.removeTeam(this.selectedTeam);
            console.log(`Equipo eliminado del NavBar: ${this.selectedTeam}`);
            this.selectedTeam = ''; 
          }
        } else {
          console.log(`La casa ${this.selectedHouse} ya tiene 3 equipos asignados.`);
        }
      } else {
        console.log(`La casa ${this.selectedHouse} ya tiene 3 equipos asignados.`);
      }

      this.selectedHouse = null; 
    } else {
      console.log('No se ha seleccionado una escuela o una casa.')
    }
  }

  updateTeamList() {
    console.log('Equipos por casa actualizados:', this.equiposPorCasa);
  }

  playSound(){
    const audioUrl = 'assets/music/harrySong.MP3';
    this.HarrySongService.playAudio("../../../assets/HarrySong/HarrySongMetal.MP3");
  }

  changeVolumen(event: Event) {
    const target = event.target as HTMLInputElement;
    const volumenNumber = parseFloat(target.value);
    this.HarrySongService.setVolumen(volumenNumber);
  }
}
