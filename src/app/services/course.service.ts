import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Course} from '../model/course';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) {

  }

  createCourse(course: Course) {
    return this.http.post<Course>("http://localhost:9000/api/courses", course);
  }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<{ payload: Course[] }>("http://localhost:9000/api/courses")
      .pipe(
        map(val => val.payload)
      );
  }

  disableCourse(course: Course) {

    return this.http.put("http://localhost:9000/api/courses/" + course.id,
      {
        ...course,
        isDisabled: true
      }
    )
  }


}
