import { Component, OnInit } from '@angular/core';
import { HarrySongService } from '../../../services/harry-song.service';

@Component({
  selector: 'app-Puntuaciones',
  templateUrl: './Puntuaciones.component.html',
  styleUrls: ['./Puntuaciones.component.css']
})
export class PuntuacionesComponent implements OnInit {
  EquipoAnterior() {
    if (this.selectedTeamIndex > 0) {
      this.selectedTeamIndex--;
    } else {
      this.selectedTeamIndex = this.Casas.length - 1;
    }
  }

  EquipoSiguiente() {
    if (this.selectedTeamIndex < this.Casas.length - 1) {
      this.selectedTeamIndex++;
    } else {
      this.selectedTeamIndex = 0;
    }
  }

  Casas = [
    { name: 'Gryffindor', score: 0, logo: '../../../assets/Img/Casas/IA-1.png', background: 'url(../../../assets/Img/Casas/BanderinGryffindor.png)' },
    { name: 'Slytherin', score: 0, logo: '../../../assets/Img/Casas/Ravenclaw.png',background: 'url(../../../assets/Img/Casas/BanderinRavenclaw.jpg)' },
    { name: 'Hufflepuff', score: 0, logo: '../../../assets/Img/Casas/HafflePuff.png',  background: 'url(../../../assets/Img/Casas/BanderinHufflepuff.png)' },
    { name: 'Ravenclaw', score: 0, logo: '../../../assets/Img/Casas/Slytherin.png', background: 'url(../../../assets/Img/Casas/BanderinSlytherin.png)' }
  ]
  puntos: number = 10;
  volume: number = 0.5;
  selectedTeamIndex: number = 0;


  constructor(private HarrySongService: HarrySongService) { }

  ngOnInit() {
  }
  playSound() {
    const audioUrl = 'assets/music/harrySong.MP3';
    this.HarrySongService.playAudio("../../../assets/HarrySong/HarrySongMetal.MP3");
  }

  changeVolumen(event: Event) {
    const target = event.target as HTMLInputElement;
    const volumenNumber = parseFloat(target.value);
    this.HarrySongService.setVolumen(volumenNumber);
  }

  seleccionarTeam(index: number) {
    this.Casas[index].score += this.puntos;
  }

  // AumentarPuntos() {
  //   this.puntos += 10;
  // }
  // DisminuirPuntos() {
  //   if (this.puntos > 0) {
  //     this.puntos -= 10;
  //   }
  // }

}

