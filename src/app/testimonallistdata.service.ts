import { Injectable } from "@angular/core";

export interface Testimonial {
  key: string;
  index: number;
  name: string;
}

@Injectable({
  providedIn: "root",
})
export class TestimonallistdataService {
  testimoniallist: Testimonial[] = [
    { key: "t1", index: 1, name: "Dr. M. Puschkarow" },
    { key: "t2", index: 2, name: "T. Hirschligau" },
    { key: "t3", index: 3, name: "M. Palummieri" },
    { key: "t4", index: 4, name: "J. Plischek" },
    { key: "t5", index: 5, name: "M. Polat" },
  ];
}
