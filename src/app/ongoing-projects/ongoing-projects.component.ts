import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api-service.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ProductFullComponent} from '../product-full/product-full.component';

@Component({
  selector: 'app-ongoing-projects',
  templateUrl: './ongoing-projects.component.html',
  styleUrls: ['./ongoing-projects.component.css']
})
export class OngoingProjectsComponent implements OnInit {
  projects;
  selected = 'clientCompany';

  constructor(private apiService: ApiService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.apiService.getProjects().subscribe((data) => {
      this.projects = data;
    });
  }

  openDialog(project): void {
    const dialogRef = this.dialog.open(ProductFullComponent, {
      width: '250px',
      data: project
    });
  }

  selectProject(project) {
    this.openDialog(project);
    console.log(project);
  }

}
