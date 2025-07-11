import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-auth-callback',
  standalone: true,
  template: `<p>Processing login...</p>`,
})
export class AuthCallback implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private tokenService: TokenService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const code = params['code'];
      if (code) {
        localStorage.setItem('authCode', code);
        console.log('Auth code stored in localStorage');

        this.tokenService.fetchAccessToken().subscribe({
            next: (response) => {
              const token = response.access_token;
              if (token) {
                const expiresIn = response.expires_in; 
                const expiryTime = new Date().getTime() + expiresIn * 1000;

                localStorage.setItem('accessToken', response.access_token);
                localStorage.setItem('tokenExpiry', expiryTime.toString());
                console.log('Access token stored in localStorage successfully.');
              }
            },
            error: (err) => {
              console.error('Failed to get token:', err);
            }
          });

        this.router.navigate(['/home']);
      } else {
        console.error('No code found in URL');
      }
    });
  }
}
