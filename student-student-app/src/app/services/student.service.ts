import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({ providedIn: 'root' })
export class StudentService {
    constructor(private http: HttpClient, private tokenService: TokenService) {}

    getAllStudents() {
        this.tokenService.checkAndRefreshAuthCode();
        var accessToken = localStorage.getItem('accessToken');
        return this.http.get<any>('http://localhost:5000/students/GetAll', {
            headers: { 
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}` }
        });
    }

    getStudentById(id: string) {
        this.tokenService.checkAndRefreshAuthCode();
        return this.http.get<any>(`http://localhost:5000/students/GetById/${id}`,{
            headers: { 
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        });
    }

    getStudentByName(name: string) {
        this.tokenService.checkAndRefreshAuthCode();
        return this.http.get<any>(`http://localhost:5000/students/GetByName/${name}`, {
            headers: { 
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        });
    }

    addStudent(student: any) {
        this.tokenService.checkAndRefreshAuthCode();
        return this.http.post<any>('http://localhost:5000/students/Add', student, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }       
        });
    }

    updateStudent(id: string, student: any) {
        this.tokenService.checkAndRefreshAuthCode();
        return this.http.put<any>(`http://localhost:5000/students/Update/${id}`, student, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }   
        });
    }

    deleteStudent(id: string) {
        this.tokenService.checkAndRefreshAuthCode();
        return this.http.delete<any>(`http://localhost:5000/students/Delete/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
    }
}