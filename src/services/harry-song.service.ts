import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HarrySongService {

  private audio = new Audio();

  constructor() {}

  playAudio(audioUrl: string) {
    
    this.audio.src = audioUrl; 
    this.audio.load();
    this.audio.play().catch(error => {
      console.error('Error al reproducir el audio:', error);
    });
  }

  setVolumen(volume: number){
    this.audio.volume = volume;
  }
}
