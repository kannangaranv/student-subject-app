import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth-callback',
  standalone: true,
  template: `<p>Processing login...</p>`,
})
export class AuthCallback implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const code = params['code'];
      if (code) {
        localStorage.setItem('auth_code', code);
        console.log('Auth code stored in localStorage');
        this.router.navigate(['/home']);
      } else {
        console.error('No code found in URL');
      }
    });
  }
}
