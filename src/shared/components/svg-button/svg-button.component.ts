import { Component, Input } from "@angular/core";

@Component({
  selector: "app-svg-button",
  imports: [],
  templateUrl: "./svg-button.component.html",
  styleUrl: "./svg-button.component.scss",
})
export class SvgButtonComponent {
  @Input() text: string = "";
  @Input() link!: string;

  openLink() {
    if (this.link) {
      window.open(this.link, "_blank", "noopener");
    }
  }
}
