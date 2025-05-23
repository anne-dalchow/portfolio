import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToggleLanguageComponent } from '../toggle-language/toggle-language.component';

@Component({
  selector: 'app-header',
  imports: [CommonModule, ToggleLanguageComponent],
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
