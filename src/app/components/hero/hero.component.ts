import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { HoverDotComponent } from '../../../shared/components/hover-dot/hover-dot.component';
import { SlideButtonComponent } from '../../../shared/components/slide-button/slide-button.component';

@Component({
  selector: 'app-hero',
  imports: [HeaderComponent, HoverDotComponent,SlideButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
