import { Component } from "@angular/core";
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { HoverDotComponent } from "../../../shared/components/hover-dot/hover-dot.component";
import { SlideButtonComponent } from "../../../shared/components/slide-button/slide-button.component";
import { MarqueeComponent } from "../../../shared/components/marquee/marquee.component";
import { ViewportScroller } from "@angular/common";

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [HeaderComponent, MarqueeComponent, HoverDotComponent, SlideButtonComponent],
  templateUrl: "./hero.component.html",
  styleUrl: "./hero.component.scss",
})
export class HeroComponent {
  constructor(private viewportScroller: ViewportScroller) {
    this.viewportScroller.setOffset([0, 100]);
  }

  setAnchorTo(anchor: string): void {
    this.viewportScroller.scrollToAnchor(anchor);
  }
}
