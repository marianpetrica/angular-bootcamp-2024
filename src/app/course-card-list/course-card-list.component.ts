import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CourseDialogComponent} from '../course-dialog/course-dialog.component';
import {filter, tap} from 'rxjs';

@Component({
  selector: 'app-course-card-list',
  templateUrl: './course-card-list.component.html',
  styleUrl: './course-card-list.component.css'
})
export class CourseCardListComponent {


  constructor(private dialog : MatDialog) {
  }

  onEditClick() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";

    dialogConfig.data = {};

    const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);

    dialogRef.afterClosed()
      .pipe(
        filter(val => !!val),
        tap(() => console.log("Dialog closed"))

      )
      .subscribe();
  }
}
