import {Component, Input, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CourseDialogComponent} from '../course-dialog/course-dialog.component';
import {filter, tap} from 'rxjs';
import {Course} from '../model/course';
import {CourseService} from '../services/course.service';
import {NumberService} from '../services/number.service';

@Component({
  selector: 'app-course-card-list',
  templateUrl: './course-card-list.component.html',
  styleUrl: './course-card-list.component.css'
})
export class CourseCardListComponent implements OnInit {
  @Input() courses!: Course[];
  classes = ["course-card", "mat-elevation-z7"];

  constructor(private dialog: MatDialog,
              private courseService : CourseService,
              private numberService : NumberService) {
  }


  ngOnInit(): void {

  }


  onEditClick(id: number) {

    this.numberService.emitNumber(id);



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

  disableCourse(course: Course) {
    this.courseService.disableCourse(course)
      .subscribe(response =>{
        console.log("After disable")
        console.log(response);
      });
  }
}
