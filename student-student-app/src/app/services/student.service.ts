import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class StudentService {
    constructor(private http: HttpClient) {}

    getAllStudents() {
        var accessToken = localStorage.getItem('accessToken');
        return this.http.get<any>('http://localhost:5000/students/GetAll', {
            headers: { Authorization: `Bearer ${accessToken}` }
        });
    }

    getStudentById(id: string) {
        return this.http.get<any>(`http://localhost:5000/students/GetById/${id}`);
    }

    getStudentByName(name: string) {
        return this.http.get<any>(`http://localhost:5000/students/GetByName/${name}`);
    }

    addStudent(student: any) {

        return this.http.post<any>('http://localhost:5000/students/Add', student, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }       
        });
    }

    updateStudent(id: string, student: any) {
        return this.http.put<any>(`http://localhost:5000/students/Update/${id}`, student, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }   
        });
    }

    deleteStudent(id: string) {
        return this.http.delete<any>(`http://localhost:5000/students/Delete/${id}`);
    }
}