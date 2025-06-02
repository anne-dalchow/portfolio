import { Component } from '@angular/core';
import { InfoCardComponent } from "../../../shared/components/info-card/info-card.component";
import { ContactformComponent } from "./contactform/contactform.component";


@Component({
  selector: 'app-contact',
  imports: [InfoCardComponent, ContactformComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
