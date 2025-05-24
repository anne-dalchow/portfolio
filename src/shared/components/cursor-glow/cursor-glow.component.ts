import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-cursor-glow',
  imports: [CommonModule],
  templateUrl: './cursor-glow.component.html',
  styleUrl: './cursor-glow.component.scss'
})
export class CursorGlowComponent {
  glowX = 0;
  glowY = 0;

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.glowX = event.clientX;
    this.glowY = event.clientY;

    const glowElement = document.querySelector('.cursor-glow') as HTMLElement;
    if (glowElement) {
      glowElement.style.transform = `translate(${this.glowX}px, ${this.glowY}px)`;
    }
  }

}
