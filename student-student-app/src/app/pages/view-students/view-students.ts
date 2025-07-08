import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

  


@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.html',
  styleUrls: ['./view-students.css'],
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule]
})
export class ViewStudents implements OnInit {
  students: Student[] = [];
  isLoaded: boolean = false;
  studentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private studentService: StudentService
  ) {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      age: [null, [Validators.required, Validators.min(1)]],
      address: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe({
      next: (data: Student[]) => {
        this.students = data;
        console.log('Students fetched successfully:', this.students);
        this.isLoaded = true;
      },
      error: (err) => {
        console.error('Failed to load students:', err);
        this.isLoaded = true; 
      }
    });
  }

  // onUpdate(student: Student) {
  //   this.studentService.updateStudent(student.id, student).subscribe({
  //     next: () => {
  //       alert('Student updated successfully!');
  //       this.router.navigate(['/students']);
  //     },
  //     error: (err) => {
  //       console.error('Failed to update student:', err);
  //       alert('Error updating student');
  //     }
  //   });
  // }

  onDelete(student: Student) {
    console.log('Delete clicked for:', student);
    this.studentService.deleteStudent(student.id).subscribe({
      next: () => {
        alert('Student deleted successfully!');
        this.router.navigate(['/students']);
      },
      error: (err) => {
        console.error('Failed to delete student:', err);
        alert('Error deleting student');
      }
    });
  }


  onView(){
    console.log('View student clicked');
  }
  
}
