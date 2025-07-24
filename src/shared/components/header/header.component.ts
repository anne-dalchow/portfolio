import { CommonModule, ViewportScroller } from "@angular/common";
import { Component } from "@angular/core";
import { ToggleLanguageComponent } from "../toggle-language/toggle-language.component";
import { HoverDotComponent } from "../hover-dot/hover-dot.component";
import { RouterLink } from "@angular/router";
import { TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: "app-header",
  imports: [CommonModule, ToggleLanguageComponent, HoverDotComponent, RouterLink, TranslatePipe],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  isOpen = false;

  constructor(private viewportScroller: ViewportScroller) {
    this.viewportScroller.setOffset([0, 100]);
  }

  setAnchorTo(anchor: string): void {
    this.viewportScroller.scrollToAnchor(anchor);
  }
  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }
}
