import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { TranslatePipe } from "@ngx-translate/core";
import { Testimonial } from "../../../core/interfaces/testimonial.interface";

@Component({
  selector: "app-single-testimonial",
  imports: [CommonModule, TranslatePipe],
  templateUrl: "./single-testimonial.component.html",
  styleUrl: "./single-testimonial.component.scss",
})
export class SingleTestimonialComponent {
  @Input() testimonial!: Testimonial;
}
