import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Project } from "../../../../core/interfaces/project.interface";
import { SvgButtonComponent } from "../../../../../shared/components/svg-button/svg-button.component";
import { CommonModule } from "@angular/common";
import { TranslateDirective, TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: "app-singleproject",
  imports: [SvgButtonComponent, CommonModule, TranslatePipe],
  templateUrl: "./singleproject.component.html",
  styleUrl: "./singleproject.component.scss",
})
export class SingleprojectComponent {
  @Input() project!: Project;
  @Input() isModalVisible: boolean = false;

  @Output() openModal = new EventEmitter<any>();
  @Output() closeModal = new EventEmitter<void>();
  @Output() nextProjectRequest = new EventEmitter<void>();

  isAnimatingOut: boolean = false;

  onClick() {
    this.openModal.emit(this.project);
  }

  handleCloseModal() {
    this.isAnimatingOut = true;
    setTimeout(() => {
      this.isAnimatingOut = false;
      this.closeModal.emit();
    }, 400);
  }

  showNextProject(event: Event) {
    event.stopPropagation();
    this.nextProjectRequest.emit();
  }
}
