import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';
import { Student } from '../../models/student.model';
import { AssignService } from '../../services/assign.service';
import { ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assign-student',
  imports:  [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './assign-student.html',
  styleUrl: './assign-student.css'
})

export class AssignStudent implements OnInit {

  students: Student[] = [];
  isLoaded: boolean = false;
  subjectId!: string;
  subjectName!: string;

  constructor(
    private route: ActivatedRoute,
    private assignStudentService: AssignService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subjectId = this.route.snapshot.paramMap.get('subjectId')!;
    this.subjectName = this.route.snapshot.paramMap.get('subjectName')!;
    this.loadStudents();
  }

  // Load unassigned students for the subject
  private loadStudents() {
    this.assignStudentService.getUnassignedStudentsBySubjectId(this.subjectId).subscribe({
      next: (data: Student[]) => {
        this.students = data;
        console.log('Unassigned students fetched successfully:', this.students);
        this.isLoaded = true;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Failed to load assigned students:', err);
        this.isLoaded = true; 
      }
    });
  }

  // Method to handle student assignment
  onAssign(student: Student) {
    this.assignStudentService.assignStudentToSubject(this.subjectId,student.id).subscribe({
      next: () => {
        alert('Student assigned successfully!');
        this.loadStudents();
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Failed to assign student:', err);
        alert('Error assigning student');
      }
    });
  }
}
