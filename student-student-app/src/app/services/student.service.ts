import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({ providedIn: 'root' })
export class StudentService {
    constructor(private http: HttpClient, private tokenService: TokenService) {}

    // Get all students
    getAllStudents() {
        this.tokenService.checkAndRefreshAuthCode();
        return this.http.get<any>('http://localhost:5000/students/GetAll');
    }

    // Get student by ID
    getStudentById(id: string) {
        this.tokenService.checkAndRefreshAuthCode();
        return this.http.get<any>(`http://localhost:5000/students/GetById/${id}`);
    }

    // Add a new student
    addStudent(student: any) {
        this.tokenService.checkAndRefreshAuthCode();
        return this.http.post<any>('http://localhost:5000/students/Add', student);
    }

    // Update an existing student
    updateStudent(id: string, student: any) {
        this.tokenService.checkAndRefreshAuthCode();
        return this.http.put<any>(`http://localhost:5000/students/Update/${id}`, student);
    }

    // Delete a student
    deleteStudent(id: string) {
        this.tokenService.checkAndRefreshAuthCode();
        return this.http.delete<any>(`http://localhost:5000/students/Delete/${id}`);
    }
}