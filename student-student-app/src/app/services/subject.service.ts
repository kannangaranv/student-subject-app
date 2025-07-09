import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({ providedIn: 'root' })
export class SubjectService {
    constructor(private http: HttpClient, private tokenService: TokenService) {}

    getAllSubjects() {
        this.tokenService.checkAndRefreshAuthCode();
        var accessToken = localStorage.getItem('accessToken');
        return this.http.get<any>('http://localhost:5000/subjects/GetAll', {
            headers: { 
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}` }
        });
    }

    getSubjectById(id: string) {
        this.tokenService.checkAndRefreshAuthCode();
        return this.http.get<any>(`http://localhost:5000/subjects/GetById/${id}`,{
            headers: { 
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        });
    }

    getSubjectByName(name: string) {
        this.tokenService.checkAndRefreshAuthCode();
        return this.http.get<any>(`http://localhost:5000/subjects/GetByName/${name}`, {
            headers: { 
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        });
    }


    checkSubjectNameExists(name: string) {
        this.tokenService.checkAndRefreshAuthCode();
        return this.http.get<any>(`http://localhost:5000/subjects/CheckNameExists/${name}`, {
            headers: { 
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        });
    }
    
    addSubject(subject: any) {
        this.tokenService.checkAndRefreshAuthCode();
        return this.http.post<any>('http://localhost:5000/subjects/Add', subject, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }       
        });
    }

    updateSubject(id: string, subject: any) {
        this.tokenService.checkAndRefreshAuthCode();
        return this.http.put<any>(`http://localhost:5000/subjects/Update/${id}`, subject, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }   
        });
    }

    deleteSubject(id: string) {
        this.tokenService.checkAndRefreshAuthCode();
        return this.http.delete<any>(`http://localhost:5000/subjects/Delete/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
    }
}
