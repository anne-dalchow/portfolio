import { Component, computed, ElementRef, inject, signal, ViewChild } from '@angular/core';
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

  private readonly testimonallistdata = inject(TestimonallistdataService);
  testimonials = this.testimonallistdata.testimonallist;

  activeIndex = signal(0);
  animationOffset = signal(0);

  visibleTestimonials = computed(() => {
    const list = this.testimonials;
    const current = this.activeIndex();
    const prev = (current - 1 + list.length) % list.length;
    const next = (current + 1) % list.length;

    return [list[prev], list[current], list[next]];
  });

  next() {
    this.animationOffset.set(-1);
    setTimeout(() => {
      const max = this.testimonials.length;
      this.activeIndex.update((i) => (i + 1) % max);
      this.animationOffset.set(0);
    }, 500);
  }

  prev() {
    this.animationOffset.set(1);
    setTimeout(() => {
      const max = this.testimonials.length;
      this.activeIndex.update((i) => (i - 1 + max) % max);
      this.animationOffset.set(0);
    }, 500);
  }

}

