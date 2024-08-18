import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  isDragging = false;
  startX: number = 0;
  scrollLeft: number = 0;

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
    const walk = x - this.scrollLeft; // Desplazamiento del cursor
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
}
