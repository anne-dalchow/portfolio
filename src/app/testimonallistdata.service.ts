import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestimonallistdataService {

  constructor() { }

  testimonallist = [
    {
      index: 5,
      name: "A.Fischer",
      description: " Text 3: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
      jobname: "Team Partner"
    },
    {
      index: 1,
      name: "T.Schulz",
      description: "I had the good fortune of working with Lukas in a group project at the Developer Akademie that involved a lot of effort. He always stayed calm, cool, and focused, and made sure our team was set up for success. He's super knowledgeable, easy to work with, and I'd happily work with him again given the chance.",
      jobname: "Frontend Developer"
    },
    {
      index: 2,
      name: "H.Janisch",
      description: "Text2: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
      jobname: "Team Partner"
    },
    {
      index: 3,
      name: "A.Fischer",
      description: " Text 3: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
      jobname: "Team Partner"
    },
    {
      index: 4,
      name: "T.Schulz",
      description: "I had the good fortune of working with Lukas in a group project at the Developer Akademie that involved a lot of effort. He always stayed calm, cool, and focused, and made sure our team was set up for success. He's super knowledgeable, easy to work with, and I'd happily work with him again given the chance.",
      jobname: "Frontend Developer"
    },
  ]
}


