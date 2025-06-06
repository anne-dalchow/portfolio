import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-slide-button',
  imports: [CommonModule, TranslateModule],
  templateUrl: './slide-button.component.html',
  styleUrl: './slide-button.component.scss'
})
export class SlideButtonComponent {
  @Input() text: string = '';
  @Input() btnHref: string = '';
  @Input() buttonType: 'button' | 'submit' | 'reset' = 'button';

  constructor(private translate: TranslateService) { }
}
