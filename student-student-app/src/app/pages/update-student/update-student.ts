import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';



@Component({
  selector: 'app-update-student',
  standalone: true,
 imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    ReactiveFormsModule
  ],  
  templateUrl: './update-student.html',
  styleUrls: ['./update-student.css']
})
export class UpdateStudent implements OnInit {
  studentForm!: FormGroup;
  studentId!: string;
  today: string = new Date().toISOString().split('T')[0]; 

  dateNotInFutureValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const selectedDate = new Date(control.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // ignore time portion
    return selectedDate > today ? { invalidDate: true } : null;
  };

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.studentId = this.route.snapshot.paramMap.get('id')!;
    
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      dateOfBirth: ['', [Validators.required, this.dateNotInFutureValidator]],
      age: ['', Validators.required],
      address: ['', Validators.required]
    });

    this.studentService.getStudentById(this.studentId).subscribe({
      next: (student) => {
        this.studentForm.patchValue(student);
      },
      error: (err) => console.error('Failed to load student', err)
    });
  }

  onUpdate(): void {
    if (this.studentForm.invalid) return;

    this.studentService.updateStudent(this.studentId, this.studentForm.value).subscribe({
      next: () => {
        alert('Student updated successfully');
        this.router.navigate(['/students']);
      },
      error: (err) => console.error('Update failed', err)
    });
  }
}
