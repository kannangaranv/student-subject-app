import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './component/sidebar/sidebar';
import { Topbar } from './component/topbar/topbar';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  imports: [Sidebar, Topbar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'student-student-app';
  constructor(private tokenService: TokenService) {}

  ngOnInit(): void {
    this.tokenService.fetchAccessToken().subscribe({
      next: (response) => {
        const token = response.access_token;
        if (token) {
          localStorage.setItem('accessToken', token);
          console.log('Access token stored in localStorage successfully.');
        }
      },
      error: (err) => {
        console.error('Failed to get token:', err);
      }
    });
  }
}

