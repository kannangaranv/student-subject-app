import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({ providedIn: 'root' })
export class AssignService {

    constructor(private http: HttpClient, private tokenService: TokenService) {}

    // Get all assigned students for a specific subject
    getAssignedStudentsBySubjectId(subjectId: string) {
        this.tokenService.checkAndRefreshAuthCode();
        return this.http.get<any>(`http://localhost:5000/subjects/GetRelatedStudents/${subjectId}`);
    }

    // Get all unassigned students for a specific subject
    getUnassignedStudentsBySubjectId(subjectId: string) {
        this.tokenService.checkAndRefreshAuthCode();
        return this.http.get<any>(`http://localhost:5000/subjects/GetUnRelatedStudents/${subjectId}`);
    }

    // Assign student to a subject
    assignStudentToSubject(subjectId: string, studentId: string) {
        this.tokenService.checkAndRefreshAuthCode();
        return this.http.post<any>(`http://localhost:5000/subjects/assignStudent/${subjectId}/${studentId}`, {});
    }

    // Unassign student from a subject
    unassignStudentFromSubject(subjectId: string, studentId: string) {
        this.tokenService.checkAndRefreshAuthCode();
        return this.http.delete<any>(`http://localhost:5000/subjects/UnassignStudent/${subjectId}/${studentId}`);
    }
}