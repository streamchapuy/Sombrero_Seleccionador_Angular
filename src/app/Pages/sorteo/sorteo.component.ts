import { Component } from '@angular/core';

@Component({
  selector: 'app-sorteo',
  templateUrl: './sorteo.component.html',
  styleUrl: './sorteo.component.css'
})
export class SorteoComponent {
  selectedTeam: string | null = null;
  selectedHouse: string | null = null;

  onteamSelected(team: string) {
    this.selectedTeam = team;
  }
  onHouseSelected(house: string) {
    this.selectedHouse = house;
    this.assingnTeamtoHouse();
  }

  assingnTeamtoHouse() {
    if (this.selectedTeam && this.selectedHouse) {
      console.log(`El equipo ${this.selectedTeam} ha sido asignado a ${this.selectedHouse}`);
    }
  }
}
