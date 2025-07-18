import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject.service';
import { Subject } from '../../models/subject.model';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-view-subjects',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './view-subjects.html',
  styleUrl: './view-subjects.css'
})
export class ViewSubjects implements OnInit {
  subjects: Subject[] = [];
  isLoaded: boolean = false;

  constructor(
    private subjectService: SubjectService,
    private cdr: ChangeDetectorRef
  ) {}

  // Load all subjects on component initialization
  ngOnInit(): void {
    this.subjectService.getAllSubjects().subscribe({
      next: (data: any[]) => {
        this.subjects = data;
        console.log('Subjects fetched successfully:', this.subjects);
        this.isLoaded = true;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Failed to load subjects:', err);
        this.isLoaded = true; 
      }
    });
  }

  // Method to delete a subject
  onDelete(subject: Subject) {
    console.log('Delete clicked for:', subject);
    this.subjectService.deleteSubject(subject.id).subscribe({
      next: () => {
        alert('Subject deleted successfully!');
        this.ngOnInit();
        this.cdr.detectChanges(); 
      },
      error: (err) => {
        console.error('Failed to delete subject:', err);
        alert('Error deleting subject');
      }
    });
  }
}
