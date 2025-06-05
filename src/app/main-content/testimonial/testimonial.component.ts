import { Component, computed, inject, signal } from '@angular/core';
import { SingleTestimonialComponent } from "./single-testimonial/single-testimonial.component";
import { TestimonallistdataService } from '../../testimonallistdata.service';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from "../../carousel/carousel.component";

@Component({
  selector: 'app-testimonial',
  imports: [SingleTestimonialComponent, CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {

  private readonly testimonallistdata = inject(TestimonallistdataService);
  testimonials = this.testimonallistdata.testimonallist;

  activeIndex = signal(0);

  visibleTestimonials = computed(() => {
    const list = this.testimonials;
    const current = this.activeIndex();
    const prev = (current - 1 + list.length) % list.length;
    const next = (current + 1) % list.length;

    return [list[prev], list[current], list[next]];
  });

  next() {
    const max = this.testimonials.length;
    this.activeIndex.update((i) => (i + 1) % max);
  }

  prev() {
    const max = this.testimonials.length;
    this.activeIndex.update((i) => (i - 1 + max) % max);
  }

}
