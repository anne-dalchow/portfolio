import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { HoverDotComponent } from '../../../shared/components/hover-dot/hover-dot.component';
import { SlideButtonComponent } from '../../../shared/components/slide-button/slide-button.component';
import { MarqueeComponent } from '../../../shared/components/marquee/marquee.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeaderComponent, MarqueeComponent, HoverDotComponent, SlideButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
}
