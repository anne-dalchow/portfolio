import { Component, computed, inject, OnInit, signal } from "@angular/core";
import { SingleTestimonialComponent } from "./single-testimonial/single-testimonial.component";
import { TestimonallistdataService, Testimonial } from "../../testimonallistdata.service";
import { CommonModule } from "@angular/common";
import { TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: "app-testimonial",
  standalone: true,
  imports: [SingleTestimonialComponent, CommonModule, TranslatePipe],
  templateUrl: "./testimonial.component.html",
  styleUrl: "./testimonial.component.scss",
})
export class TestimonialComponent implements OnInit {
  testimonials: Testimonial[] = [];
  currentSlide: number = 1;

  private startX: number = 0;
  private threshold: number = 50;

  constructor(private testimonialService: TestimonallistdataService) {}

  ngOnInit(): void {
    this.testimonials = this.testimonialService.testimoniallist;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.testimonials.length) % this.testimonials.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  onTouchStart(event: TouchEvent) {
    this.startX = event.touches[0].clientX;
  }

  onTouchEnd(event: TouchEvent) {
    const deltaX = event.changedTouches[0].clientX - this.startX;
    if (deltaX > this.threshold) {
      this.prevSlide();
    } else if (deltaX < -this.threshold) {
      this.nextSlide();
    }
  }
}
