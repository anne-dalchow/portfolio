import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-singleproject',
  imports: [],
  templateUrl: './singleproject.component.html',
  styleUrl: './singleproject.component.scss'
})
export class SingleprojectComponent {
  @Input() project = {
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
  }
}
