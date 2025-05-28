import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectlistdataService {

  constructor() {
  }

  projectlist = [
    {
      index: 1,
      name: "Join",
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ",
      techStack: [
        { name: "CSS", img: "/images/projects/CSS.svg" },
        { name: "HTML", img: "/images/projects/HTML.svg" },
        { name: "Firebase", img: "/images/projects/Firebase.svg" },
        { name: "Angular", img: "/images/projects/Angular.svg" },
        { name: "TypeScript", img: "/images/projects/TypeScript.svg" }
      ],
      previewImg: "/images/projects/join_preview.svg",
      img: "/images/projects/join.jpg"
    },
    {
      index: 2,
      name: "El Pollo Loco",
      description: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen. ",
      techStack: [
        { name: "CSS", img: "/images/projects/CSS.svg" },
        { name: "HTML", img: "/images/projects/HTML.svg" },
        { name: "JavaScript", img: "/images/projects/Javascript.svg" },
      ],
      previewImg: "/images/projects/el_pollo_loco_preview.svg",
      img: "/images/projects/el_pollo_loco.jpg"
    },
    {
      index: 3,
      name: "DA Bubble",
      description: "This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.",
      techStack: [
        { name: "CSS", img: "/images/projects/CSS.svg" },
        { name: "HTML", img: "/images/projects/HTML.svg" },
        { name: "Angular", img: "/images/projects/Angular.svg" },
        { name: "TypeScript", img: "/images/projects/TypeScript.svg" }
      ],
      previewImg: "/images/projects/da_bubble_preview.svg",
      img: "/images/projects/slack_clone.jpg"
    }];
}
