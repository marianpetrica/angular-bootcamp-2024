import {Component, OnInit, Signal} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CourseDialogComponent} from '../course-dialog/course-dialog.component';
import {filter, Observable, tap} from 'rxjs';
import {Course} from '../model/course';
import {CourseService} from '../services/course.service';
import {NumberService} from '../services/number.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  isCardListDisabled = false;

  courses: Observable<Course[]> = new Observable();

  number: Signal<number>;

  constructor(private dialog: MatDialog,
              private courseService: CourseService,
              private numberService : NumberService) {
    this.number= this.numberService.value;


  }

  ngOnInit(): void {
    this.courses = this.courseService.getAllCourses();
  }

  private async fetchWithAsync() {
    return await fetch('http://localhost:9000/api/wait').then(res => res.json());
  }

  //Example of fetch request and Promises
  private fetchRequest() {
    let responsePromise = fetch('http://localhost:9000/api/courses');

    responsePromise.then(response => {
      return response.json()
    }).then(data => {
      return data.payload as Course[]
    }).then(courses => {
      console.log(courses);
    }).finally(() => {
      console.log("Finally :D")
    }).catch(() => {
      console.log("Error")
    })
  }

  //Example of delegating long operation to setTimeout()
  private nonBlockingOperation() {
    console.log('Working');
    setTimeout(() => {
      console.log("I am done!")
    }, 5000)
  }

  //Simulate blocking the UI
  private blockUIWithRequest() {
    let req = new XMLHttpRequest();
    req.open('GET', 'http://localhost:9000/api/wait', false);
    req.addEventListener("load", res => {
      console.log(res)
    });
    req.send();
  }

  async addNewCourse() {
    // this.blockUIWithRequest();
    // this.nonBlockingOperation();
    // this.fetchRequest();
    let data = await this.fetchWithAsync();
    console.log(data)

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

  toggleDisable() {
    this.isCardListDisabled = !this.isCardListDisabled;
  }
}
