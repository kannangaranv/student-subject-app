import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router'; 
import { SubjectService } from '../../services/subject.service';
import { RouterModule } from '@angular/router';
import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { of } from 'rxjs';
import { debounceTime, map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-add-subject',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './add-subject.html',
  styleUrl: './add-subject.css'
})
export class AddSubject {
  subjectForm: FormGroup;
  subjectNameExists: boolean = false;

  constructor(
    private fb: FormBuilder,
    private subjectService: SubjectService,
    private router: Router
  ) {
    this.subjectForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onSubmit(): void {
    console.log("subjectNameExists:", this.subjectNameExists);
    if (this.subjectForm.valid && !this.subjectNameExists) {
      this.subjectService.addSubject(this.subjectForm.value).subscribe({
        next: () => {
          alert('Subject added successfully!');
          this.router.navigate(['/subjects']);
        },
        error: (err) => {
          console.error('Error adding subject:', err);
          alert('Failed to add subject');
        }
      });
    
    } else {
      alert('Please fill in all required fields.');
    }
  }

  
  
}
