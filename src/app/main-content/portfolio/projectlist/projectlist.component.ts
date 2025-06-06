import { Component, inject } from '@angular/core';
import { SingleprojectComponent } from "./singleproject/singleproject.component";
import { ProjectlistdataService } from '../../../projectlistdata.service';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from "../../../../shared/components/info-card/info-card.component";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-projectlist',
  imports: [TranslatePipe, SingleprojectComponent, CommonModule, InfoCardComponent],
  templateUrl: './projectlist.component.html',
  styleUrl: './projectlist.component.scss'
})
export class ProjectlistComponent {
  projectlistdata = inject(ProjectlistdataService);

  isModalVisible = false;
  selectedProject: any = null;

  showModal(project: any) {
    this.selectedProject = project;
    this.isModalVisible = true;
  }

  hideModal() {
    this.isModalVisible = false;
  }

  loadNextProject() {
    const list = this.projectlistdata.projectlist;
    const currentIndex = list.findIndex(p => p === this.selectedProject);
    const nextIndex = (currentIndex + 1) % list.length;
    this.selectedProject = list[nextIndex];
  }
}