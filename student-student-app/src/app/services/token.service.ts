import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class TokenService {
  constructor(private http: HttpClient, private router: Router) {}

  // Check if the access token is expired and refresh it if necessary
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

  // Fetch a new access token using the stored auth code
  fetchAccessToken() {
    var code = localStorage.getItem('authCode');
    return this.http.get<any>('http://localhost:5000/getAccessToken?code=' + code);
  }
}
