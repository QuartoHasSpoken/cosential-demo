import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface Project {
  name: string;
  clientCompany: string;
  completionDate: string;
  height: number;
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() project: Project;
  @Input() selectedProperty = 'clientCompany';
  @Output() onSelectedProject = new EventEmitter<Project>();

  constructor() { }

  ngOnInit(): void {
  }
  onSelect() {
    this.onSelectedProject.emit(this.project);
  }

}
