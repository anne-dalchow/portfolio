import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-privacypolice',
  standalone: true,
  imports: [CommonModule, HeaderComponent, TranslatePipe],
  templateUrl: './privacypolice.component.html',
  styleUrl: './privacypolice.component.scss'
})
export class PrivacypoliceComponent {

}
