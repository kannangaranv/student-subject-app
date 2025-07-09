import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject.service';
import { Subject } from '../../models/subject.model';

@Component({
  selector: 'app-view-subject-assign',
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './view-subject-assign.html',
  styleUrl: './view-subject-assign.css'
})
export class ViewSubjectAssign implements OnInit {
  subjects: Subject[] = [];
    isLoaded: boolean = false;
  
    constructor(private subjectService: SubjectService) {}
  
    ngOnInit(): void {
      this.subjectService.getAllSubjects().subscribe({
        next: (data: any[]) => {
          this.subjects = data;
          console.log('Subjects fetched successfully:', this.subjects);
          this.isLoaded = true;
        },
        error: (err) => {
          console.error('Failed to load subjects:', err);
          this.isLoaded = true; 
        }
      });
    }
}
