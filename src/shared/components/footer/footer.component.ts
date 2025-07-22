import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { HoverDotComponent } from "../hover-dot/hover-dot.component";
import { TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: "app-footer",
  imports: [RouterLink, HoverDotComponent, TranslatePipe],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.scss",
})
export class FooterComponent {
  scrollToTop() {
    const top = document.getElementById("top");
    if (top) top.scrollIntoView({ behavior: "smooth" });
  }
}
