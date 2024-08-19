import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sorteo',
  templateUrl: './sorteo.component.html',
  styleUrls: ['./sorteo.component.css']
})
export class SorteoComponent {
  @ViewChild('equipo1') equipo1!: ElementRef;
  @ViewChild('equipo2') equipo2!: ElementRef;
  @ViewChild('equipo3') equipo3!: ElementRef;
  @ViewChild('equipo4') equipo4!: ElementRef;

  equiposPorCasa: { [key: string]: string[] } = {
    Gryffindor: [],
    Hufflepuff: [],
    Ravenclaw: [],
    Slytherin: []
  };

  selectedTeam: string | null = null;
  selectedHouse: string | null = null;

  onteamSelected(team: string) {
    this.selectedTeam = team;
  }

  onHouseSelected(house: string) {
    this.selectedHouse = house;
    this.assignTeamToHouse();
  }

  assignTeamToHouse() {
    if (this.selectedTeam && this.selectedHouse) {
      const houseTeams = this.equiposPorCasa[this.selectedHouse];
      if (!houseTeams.includes(this.selectedTeam)) {
        houseTeams.push(this.selectedTeam);
      }
      this.updateTeamList();
      this.selectedTeam = null;
      this.selectedHouse = null;
    }
  }

  updateTeamList() {
    console.log('Equipos por casa actualizados:', this.equiposPorCasa);
  }
}
