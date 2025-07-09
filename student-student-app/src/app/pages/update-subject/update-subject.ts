import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubjectService } from '../../services/subject.service';  
import { RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-subject',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    ReactiveFormsModule],
  templateUrl: './update-subject.html',
  styleUrl: './update-subject.css'
})
export class UpdateSubject implements OnInit {
  subjectForm!: FormGroup;
  subjectId!: string;

  constructor(
    private fb: FormBuilder,
    private subjectService: SubjectService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.subjectId = this.route.snapshot.paramMap.get('id')!;
    this.subjectForm = this.fb.group({
      name: ['', Validators.required]
    });
    this.subjectService.getSubjectById(this.subjectId).subscribe({
      next: (subject) => {
        this.subjectForm.patchValue(subject);
      },
      error: (err) => {
        console.error('Error fetching subject:', err);
        alert('Failed to load subject details');
      }
    });
  }

 onUpdate(): void {
    if (this.subjectForm.valid) {
      this.subjectService.updateSubject(this.subjectId, this.subjectForm.value).subscribe({
        next: () => {
          alert('Subject updated successfully!');
          this.router.navigate(['/subjects']);
        },
        error: (err) => {
          console.error('Error updating subject:', err);
          alert('Failed to update subject');
        }
      });
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
