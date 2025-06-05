import { Component, computed, inject, signal } from '@angular/core';
import { SingleTestimonialComponent } from "./single-testimonial/single-testimonial.component";
import { TestimonallistdataService } from '../../testimonallistdata.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonial',
  imports: [SingleTestimonialComponent, CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})

export class TestimonialComponent {
  testimonallistdata = inject(TestimonallistdataService);
  testimonials = this.testimonallistdata.testimoniallist;

  currentSlide = 0;

  private startX = 0;
  private threshold = 50;

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.testimonials.length) % this.testimonials.length;
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

