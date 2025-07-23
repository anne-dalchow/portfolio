import { Component, computed, HostListener, signal } from "@angular/core";

@Component({
  selector: "app-scroll-toggle-button",
  imports: [],
  templateUrl: "./scroll-toggle-button.component.html",
  styleUrl: "./scroll-toggle-button.component.scss",
})
export class ScrollToggleButtonComponent {
  scrollY = signal(0);

  @HostListener("window:scroll", [])
  onScroll() {
    this.scrollY.set(window.scrollY || document.documentElement.scrollTop);
  }

  readonly showButton = computed(() => this.scrollY() > 600);

  scrollToTop() {
    const top = document.getElementById("top");
    if (top) top.scrollIntoView({ behavior: "smooth" });
  }
}
