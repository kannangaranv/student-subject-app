import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TokenService {
  constructor(private http: HttpClient, private router: Router) {}

  checkAndRefreshAuthCode(): void {
        const expiry = Number(localStorage.getItem('tokenExpiry')) || 0;
        const now = new Date().getTime();

        if (now >= expiry) {
            console.log("Access token expired. Redirecting to get new auth code...");
            this.router.navigate(['']);
        } else {
            console.log("Access token is still valid.");
        }
        }

  fetchAccessToken() {
    var code = localStorage.getItem('authCode');
    return this.http.get<any>('http://localhost:5000/getAccessToken?code=' + code);
  }
}
