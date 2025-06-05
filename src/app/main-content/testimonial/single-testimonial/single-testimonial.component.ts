import { Component, Input } from '@angular/core';

interface TestimonialInterface {
  index: number,
  name: string,
  description: string,
  jobname: string,

}

@Component({
  selector: 'app-single-testimonial',
  imports: [],
  templateUrl: './single-testimonial.component.html',
  styleUrl: './single-testimonial.component.scss'
})
export class SingleTestimonialComponent {
  @Input() testimonial = {
    index: 1,
    name: "",
    description: "",
    jobname: "",
  };
}
