import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-toggle-language",
  imports: [CommonModule],
  templateUrl: "./toggle-language.component.html",
  styleUrl: "./toggle-language.component.scss",
})
export class ToggleLanguageComponent {
  currentLang: "en" | "de" = "en";

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem("lang");
    const browserLang = navigator.language.slice(0, 2);

    if (savedLang === "de" || savedLang == "en") {
      this.currentLang = savedLang as "en" | "de";
    } else if (browserLang === "de" || browserLang === "en") {
      this.currentLang = browserLang;
    } else {
      this.currentLang = "en";
    }

    this.translate.use(this.currentLang);
  }

  toggleLanguage(language: "en" | "de") {
    this.currentLang = language;
    this.translate.use(language);
    localStorage.setItem("lang", language);
  }
}
