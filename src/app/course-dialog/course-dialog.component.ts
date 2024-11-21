import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrl: './course-dialog.component.css'
})
export class CourseDialogComponent {

  constructor(private dialogRef: MatDialogRef<CourseDialogComponent>,
              @Inject(MAT_DIALOG_DATA) course: any) {

  }

  close() {
    this.dialogRef.close();
  }

  save() {

  }
}
