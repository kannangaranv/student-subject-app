import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TokenService {
  constructor(private http: HttpClient) {}

  fetchAccessToken() {
    var code = localStorage.getItem('auth_code');
    return this.http.get<any>('http://localhost:5000/getAccessToken?code=' + code);
  }
}
