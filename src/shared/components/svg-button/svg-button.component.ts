import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-button',
  imports: [],
  templateUrl: './svg-button.component.html',
  styleUrl: './svg-button.component.scss'
})
export class SvgButtonComponent {
  @Input() text: string = '';
}
