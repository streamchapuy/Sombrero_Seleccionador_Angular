import { Component, OnInit } from '@angular/core';
import { HarrySongService } from '../../../services/harry-song.service';

@Component({
  selector: 'app-Puntuaciones',
  templateUrl: './Puntuaciones.component.html',
  styleUrls: ['./Puntuaciones.component.css']
})
export class PuntuacionesComponent implements OnInit {

  volume: number = 0.5;

  constructor(private HarrySongService: HarrySongService ) { }

  ngOnInit() {
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

