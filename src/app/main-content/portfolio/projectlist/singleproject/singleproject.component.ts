import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SvgButtonComponent } from "../../../../../shared/components/svg-button/svg-button.component";

@Component({
  selector: 'app-singleproject',
  imports: [SvgButtonComponent],
  templateUrl: './singleproject.component.html',
  styleUrl: './singleproject.component.scss'
})
export class SingleprojectComponent {
  @Input() project = {
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
  }

  @Input() isModalVisible: boolean = false;  // Modal sichtbar oder nicht

  @Output() openModal = new EventEmitter<any>();
  @Output() closeModal = new EventEmitter<void>();
  @Output() nextProjectRequest = new EventEmitter<void>();

  onClick() {
    this.openModal.emit(this.project);
  }

  handleCloseModal() {
    this.closeModal.emit();
  }

  showNextProject(event: Event) {
    event.stopPropagation();  // Klick nicht an Eltern weitergeben (Modal schließen verhindern)
    this.nextProjectRequest.emit();
  }
}
