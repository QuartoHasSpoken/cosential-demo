import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Project} from '../project/project.component';

@Component({
  selector: 'app-product-full',
  templateUrl: './product-full.component.html',
  styleUrls: ['./product-full.component.css']
})
export class ProductFullComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProductFullComponent>, @Inject(MAT_DIALOG_DATA) public data: Project) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
