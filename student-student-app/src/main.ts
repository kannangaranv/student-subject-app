import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideHttpClient } from '@angular/common/http';
import { App } from './app/app';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

bootstrapApplication(App, {
  providers: [provideHttpClient(), ...appConfig.providers, MatCardModule, MatButtonModule],
  
}).catch((err) => console.error(err));




