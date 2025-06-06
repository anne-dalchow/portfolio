import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InfoCardComponent } from '../../../shared/components/info-card/info-card.component';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'app-about',
  imports: [CommonModule, TranslatePipe, TranslateModule, InfoCardComponent],
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
