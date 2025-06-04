import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";

@Component({
  selector: 'app-privacypolice',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './privacypolice.component.html',
  styleUrl: './privacypolice.component.scss'
})
export class PrivacypoliceComponent {

}
