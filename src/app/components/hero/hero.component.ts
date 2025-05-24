import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { HoverDotComponent } from '../../../shared/components/hover-dot/hover-dot.component';

@Component({
  selector: 'app-hero',
  imports: [HeaderComponent, HoverDotComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
