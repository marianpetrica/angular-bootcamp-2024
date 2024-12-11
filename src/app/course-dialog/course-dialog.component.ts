import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {Course} from '../model/course';
import {CourseService} from '../services/course.service';

export function validateContains(): ValidatorFn {
  return (control): ValidationErrors | null => {
    const val = control.value as string;
    return !val.includes("asd") ? {containsStr: true} : null
  }
}

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrl: './course-dialog.component.css'
})
export class CourseDialogComponent {

  formGroup = new FormGroup({
    description: new FormControl('', {validators: [Validators.required, validateContains()]}),
    longDescription: new FormControl('', {validators: [Validators.required, Validators.minLength(5)]}),
    category: new FormControl('', {validators: [Validators.required]}),
  });

  constructor(private dialogRef: MatDialogRef<CourseDialogComponent>,
              @Inject(MAT_DIALOG_DATA) course: any,
              private courseService: CourseService) {

  }

  close() {
    this.dialogRef.close();
  }

  save() {
    console.log("From save")
    const value = this.formGroup.value as Course;
    console.log(value)
    this.dialogRef.close(value);
  }

  get courseDescription() {
    return this.formGroup.get('courseDescription')
  };

  get longDescription() {
    return this.formGroup.get('longDescription')
  };

  get category() {
    return this.formGroup.get('category')
  };


}
