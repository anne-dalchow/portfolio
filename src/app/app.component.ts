import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Router, NavigationEnd, RouterOutlet } from "@angular/router";
import { CursorGlowComponent } from "../shared/components/cursor-glow/cursor-glow.component";
import { FooterComponent } from "../shared/components/footer/footer.component";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, CommonModule, CursorGlowComponent, FooterComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  constructor(private router: Router, private translate: TranslateService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0 });
      }
    });
    this.translate.addLangs(["de", "en"]);
    this.translate.setDefaultLang("de");
    this.translate.use("de");
  }
  title = "portfolio";
}
