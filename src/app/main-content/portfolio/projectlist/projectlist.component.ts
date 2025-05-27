import { Component,inject } from '@angular/core';
import { SingleprojectComponent } from "./singleproject/singleproject.component";
import { ProjectlistdataService } from '../../../projectlistdata.service';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from "../../../../shared/components/info-card/info-card.component";

@Component({
  selector: 'app-projectlist',
  imports: [SingleprojectComponent, CommonModule, InfoCardComponent],
  templateUrl: './projectlist.component.html',
  styleUrl: './projectlist.component.scss'
})
export class ProjectlistComponent {
  projectlistdata = inject(ProjectlistdataService);
}
