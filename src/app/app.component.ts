import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CursorGlowComponent } from '../shared/components/cursor-glow/cursor-glow.component';
import { FooterComponent } from "../shared/components/footer/footer.component";
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective
} from "@ngx-translate/core";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CursorGlowComponent, FooterComponent, TranslatePipe, TranslateDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('de');
    this.translate.use('en');
  }
  title = 'portfolio';

}
