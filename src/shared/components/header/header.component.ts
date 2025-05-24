import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToggleLanguageComponent } from '../toggle-language/toggle-language.component';
import { HoverDotComponent } from '../hover-dot/hover-dot.component';

@Component({
  selector: 'app-header',
  imports: [CommonModule, ToggleLanguageComponent, HoverDotComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  language: 'en' | 'de' = 'en';

  onLanguageChange(lang: 'en' | 'de') {
    this.language = lang;
    // Optional: Event oder Service zum Sprachwechsel (i18n)
    console.log('Sprache gewechselt zu:', lang);
  }
}
