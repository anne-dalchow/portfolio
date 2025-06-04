import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HoverDotComponent } from "../hover-dot/hover-dot.component";

@Component({
  selector: 'app-footer',
  imports: [RouterLink, HoverDotComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
