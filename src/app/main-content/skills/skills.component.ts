import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InfoCardComponent } from '../../../shared/components/info-card/info-card.component';
import { SlideButtonComponent } from '../../../shared/components/slide-button/slide-button.component';
import { SkillIconsComponent } from '../../../shared/components/skill-icons/skill-icons.component';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, TranslateModule, TranslatePipe, InfoCardComponent, SlideButtonComponent, SkillIconsComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
