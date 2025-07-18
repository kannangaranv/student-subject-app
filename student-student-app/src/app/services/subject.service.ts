import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({ providedIn: 'root' })
export class SubjectService {
    constructor(private http: HttpClient, private tokenService: TokenService) {}

    // Get all subjects
    getAllSubjects() {
        this.tokenService.checkAndRefreshAuthCode();
        return this.http.get<any>('http://localhost:5000/subjects/GetAll');
    }

    // Get subject by ID
    getSubjectById(id: string) {
        this.tokenService.checkAndRefreshAuthCode();
        return this.http.get<any>(`http://localhost:5000/subjects/GetById/${id}`);
    }

    // Add a new subject
    addSubject(subject: any) {
        this.tokenService.checkAndRefreshAuthCode();
        return this.http.post<any>('http://localhost:5000/subjects/Add', subject);
    }

    // Update an existing subject
    updateSubject(id: string, subject: any) {
        this.tokenService.checkAndRefreshAuthCode();
        return this.http.put<any>(`http://localhost:5000/subjects/Update/${id}`, subject);
    }

    // Delete a subject
    deleteSubject(id: string) {
        this.tokenService.checkAndRefreshAuthCode();
        return this.http.delete<any>(`http://localhost:5000/subjects/Delete/${id}`);
    }
}
