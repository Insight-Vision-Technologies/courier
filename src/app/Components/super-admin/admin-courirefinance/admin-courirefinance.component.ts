import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-courirefinance',
  templateUrl: './admin-courirefinance.component.html',
  styleUrls: ['./admin-courirefinance.component.css']
})
export class AdminCourirefinanceComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AdminCourirefinanceComponent>,) { }

  ngOnInit(): void {
  }

}
