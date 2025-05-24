import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { CursorGlowComponent } from '../shared/components/cursor-glow/cursor-glow.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,CursorGlowComponent, HeroComponent,AboutComponent,SkillsComponent,PortfolioComponent,TestimonialComponent,ContactComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
