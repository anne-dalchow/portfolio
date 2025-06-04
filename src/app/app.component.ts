import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CursorGlowComponent } from '../shared/components/cursor-glow/cursor-glow.component';
import { FooterComponent } from "../shared/components/footer/footer.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, CursorGlowComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
