import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InfoCardComponent } from '../info-card/info-card.component';

@Component({
  selector: 'app-about',
  imports: [CommonModule, InfoCardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  isActivated = false;

  activateOnce() {
    if (!this.isActivated) {
      this.isActivated = true;
    }
  }
}
