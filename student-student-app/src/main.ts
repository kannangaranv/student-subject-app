import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { App } from './app/app';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { authInterceptor } from './app/auth-interceptor';

bootstrapApplication(App, {
  providers: [provideHttpClient(withInterceptors([authInterceptor])), ...appConfig.providers, MatCardModule, MatButtonModule],

}).catch((err) => console.error(err));




