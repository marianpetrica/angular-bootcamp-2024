import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CourseService} from '../services/course.service';
import {FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {Course} from '../model/course';

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

  formGroup: FormGroup = new FormGroup({
    description: new FormControl('', [Validators.required, validateContains()]),
    longInput: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required])
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
    console.log(this.formGroup.value)
    const value = this.formGroup.value as Course;
    this.dialogRef.close(value);
  }

  get courseDescription() {
    return this.formGroup.get('description');
  };

  get longDescription() {
    return this.formGroup.get('longDescription')
  };

  get category() {
    return this.formGroup.get('category')
  };


}
