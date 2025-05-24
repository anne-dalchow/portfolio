import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hover-dot',
  imports: [CommonModule],
  templateUrl: './hover-dot.component.html',
  styleUrl: './hover-dot.component.scss'
})
export class HoverDotComponent {
  @Input() color = '#008080'; 
  @Input() dotPosition: 'below' | 'right' = 'below';
}
