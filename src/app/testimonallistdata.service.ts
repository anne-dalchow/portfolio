import { Injectable } from '@angular/core';

export interface Testimonial {
  key: string;
  index: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class TestimonallistdataService {
  testimoniallist: Testimonial[] = [
    { key: 't1', index: 1, name: "T. Schulz" },
    { key: 't2', index: 2, name: "A. Becker" },
    { key: 't3', index: 3, name: "M. Meier" },
    { key: 't4', index: 4, name: "S. Roth" },
    { key: 't5', index: 5, name: "L. König" }
  ];
}
