import { Component, ViewChild, ElementRef, viewChild } from '@angular/core';
import { NavBarComponent } from '../../Components/nav-bar/nav-bar.component';
import { RuletaComponent } from '../../Components/ruleta/ruleta.component';

@Component({
  selector: 'app-sorteo',
  templateUrl: './sorteo.component.html',
  styleUrls: ['./sorteo.component.css']
})
export class SorteoComponent {
  @ViewChild('navBar') navBarComponent!: NavBarComponent;
  @ViewChild('ruleta') ruletaComponent!: RuletaComponent;


  equiposPorCasa: { [key: string]: string[] } = {
    Gryffindor: [],
    Hufflepuff: [],
    Ravenclaw: [],
    Slytherin: []
  };

  selectedTeam: string | null = null;
  selectedHouse: string | null = null;
  slectedSchool: string | null = null;

  onteamSelected(team: string) {
    this.selectedTeam = team;
  }

  onHouseSelected(house: string) {
    this.selectedHouse = house;
    this.assignTeamToHouse();
  }

  onSchoolSelected(school: string) {
    this.slectedSchool = school;
    this.setRuletaTarget(school);
  }

  setRuletaTarget(school: string){
    let equipoObjetivo = null;
    if (school === 'UTN') {
      equipoObjetivo = 'Slytherin';
    }
  }


  assignTeamToHouse() {
    if (this.selectedTeam && this.selectedHouse) {
      const houseTeams = this.equiposPorCasa[this.selectedHouse];

      
      if (houseTeams.length < 3) {
        if (!houseTeams.includes(this.selectedTeam)) {
          houseTeams.push(this.selectedTeam);
        }
        this.updateTeamList();
      } else {
        console.log(`La casa ${this.selectedHouse} ya tiene 3 escuelas asignadas.`);
      }

     
      setTimeout(() => {
        if (this.selectedTeam && this.navBarComponent) {
          this.navBarComponent.removeTeam(this.selectedTeam); 
          console.log(`Equipo eliminado del NavBar: ${this.selectedTeam}`);
          this.selectedTeam = null; 
        }
      }, 100);

      this.selectedHouse = null; 
    }
  }

  updateTeamList() {
    console.log('Equipos por casa actualizados:', this.equiposPorCasa);
  }
}
