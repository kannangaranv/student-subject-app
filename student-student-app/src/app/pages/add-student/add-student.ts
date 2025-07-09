import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StudentService } from '../../services/student.service';
import { RouterModule } from '@angular/router';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  standalone: true,
  templateUrl: './add-student.html',
  styleUrls: ['./add-student.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule
  ]
})
export class AddStudent {
  studentForm: FormGroup;
  today: string = new Date().toISOString().split('T')[0]; 

  dateNotInFutureValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const selectedDate = new Date(control.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // ignore time portion
    return selectedDate > today ? { invalidDate: true } : null;
  };


  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private studentService: StudentService
  ) {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      dateOfBirth: ['', [Validators.required, this.dateNotInFutureValidator]],
      age: [null, [Validators.required, Validators.min(1)]],
      address: ['', Validators.required]
    });
  }


  onSubmit(): void {
    if (this.studentForm.valid) {
      this.studentService.addStudent(this.studentForm.value).subscribe({
        next: () => {
          alert('Student added successfully!');
          this.router.navigate(['/students']);
        },
        error: (err) => {
          console.error('Failed to add student:', err);
          alert('Error adding student');
        }
      });
    }
  }
}
