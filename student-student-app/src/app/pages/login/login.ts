import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `<p>Redirecting to Microsoft Login...</p>`
})
export class Login implements OnInit {

  ngOnInit(): void {
    const tenantId = '4c1f8692-b5b7-46f5-bc82-2330d59a738d';
    const clientId = 'b3855099-7d77-4bed-a44e-582a2a0b77e7';
    const scope = 'api://c95d793c-08a1-4d1d-b521-c9962e9ed117/Student.Read';
    const redirectUri = 'http://localhost:4401/login/callback';

    const authUrl =
      `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/authorize` +
      `?client_id=${clientId}` +
      `&response_type=code` +
      `&redirect_uri=${encodeURIComponent(redirectUri)}` +
      `&response_mode=query` +
      `&scope=${encodeURIComponent(scope)}`;

    window.location.href = authUrl; 
  }
}
