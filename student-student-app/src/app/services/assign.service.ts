import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { I } from '@angular/cdk/keycodes';

@Injectable({ providedIn: 'root' })
export class AssignService {

    constructor(private http: HttpClient, private tokenService: TokenService) {}

    getAssignedStudentsBySubjectId(subjectId: string) {
        this.tokenService.checkAndRefreshAuthCode();
        return this.http.get<any>(`http://localhost:5000/subjects/GetRelatedStudents/${subjectId}`, {
            headers: { 
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
    }

    getUnassignedStudentsBySubjectId(subjectId: string) {
        this.tokenService.checkAndRefreshAuthCode();
        return this.http.get<any>(`http://localhost:5000/subjects/GetUnRelatedStudents/${subjectId}`, {
            headers: { 
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
    }

    assignStudentToSubject(subjectId: string, studentId: string) {
        this.tokenService.checkAndRefreshAuthCode();
        return this.http.post<any>(`http://localhost:5000/subjects/assignStudent/${subjectId}/${studentId}`, {}, {
            headers: { 
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
    }

    unassignStudentFromSubject(subjectId: string, studentId: string) {
        this.tokenService.checkAndRefreshAuthCode();
        return this.http.delete<any>(`http://localhost:5000/subjects/UnassignStudent/${subjectId}/${studentId}`, {
            headers: { 
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
    }
}