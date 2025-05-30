import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-testimonial',
  imports: [],
  templateUrl: './single-testimonial.component.html',
  styleUrl: './single-testimonial.component.scss'
})
export class SingleTestimonialComponent {
  @Input() testimonial = {
    index: 1,
    name: "Lorem",
    description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. Lorem Ipsum delores ",
    jobname: "Frontend Developer",
  };
}
