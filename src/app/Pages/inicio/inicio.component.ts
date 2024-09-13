import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HarrySongService } from '../../../services/harry-song.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  volume: number = 0.1;

  constructor(private router: Router, private HarrySongService: HarrySongService ) {}

ngOnInit(): void{
    this.playSound();
}
  iniciarSorteo(url: string) {   
    this.playSound() 
    this.router.navigate([url]);
  }

  playSound(){
    const audioUrl = 'assets/music/harrySong.MP3';
    this.HarrySongService.playAudio("../../../assets/HarrySong/harrySong.MP3");
  }

  changeVolumen(event: Event) {
    const target = event.target as HTMLInputElement;
    const volumenNumber = parseFloat(target.value);
    this.HarrySongService.setVolumen(volumenNumber);
  }
}

