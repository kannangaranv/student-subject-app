import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NavigationEnd, RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject.service';
import { Subject } from '../../models/subject.model';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-view-subject-assign',
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './view-subject-assign.html',
  styleUrl: './view-subject-assign.css'
})
export class ViewSubjectAssign implements OnInit {
  subjects: Subject[] = [];
    isLoaded: boolean = false;

    constructor(private subjectService: SubjectService, private router: Router, private cdr: ChangeDetectorRef) {}

    ngOnInit(): void {
      this.loadSubjects();
      
      this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && this.router.url.includes('/assign')) {
        this.onView();
      }
  });
    }

    loadSubjects() {
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

    onView() {
      console.log('View clicked');
    }
}
