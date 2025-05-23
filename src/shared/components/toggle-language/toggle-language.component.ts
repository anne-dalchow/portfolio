import { CommonModule } from '@angular/common';
import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-toggle-language',
  imports: [CommonModule],
  templateUrl: './toggle-language.component.html',
  styleUrl: './toggle-language.component.scss'
})
export class ToggleLanguageComponent {
  @Input() activeLanguage: 'en' | 'de' = 'en';
  @Output() languageChange = new EventEmitter<'en' | 'de'>();

  toggleLanguage() {
    this.activeLanguage = this.activeLanguage === 'en' ? 'de' : 'en';
    this.languageChange.emit(this.activeLanguage);
  }
}
