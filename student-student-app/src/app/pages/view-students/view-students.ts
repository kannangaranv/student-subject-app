import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

  


@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.html',
  styleUrls: ['./view-students.css'],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule
  ]
})

export class ViewStudents implements OnInit {
  students: Student[] = [];
  isLoaded: boolean = false;

  constructor(
    private studentService: StudentService,
    private cdr: ChangeDetectorRef
  ) {
  }

  // Fetch all students on component initialization
  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe({
      next: (data: Student[]) => {
        this.students = data;
        console.log('Students fetched successfully:', this.students);
        this.isLoaded = true;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Failed to load students:', err);
        this.isLoaded = true; 
      }
    });
  }

  // Method to delete a student
  onDelete(student: Student) {
    console.log('Delete clicked for:', student);
    this.studentService.deleteStudent(student.id).subscribe({
      next: () => {
        alert('Student deleted successfully!');
        this.ngOnInit();
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Failed to delete student:', err);
        alert('Error deleting student');
      }
    });
  }
 
}
