import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home'; 
import { AuthCallback } from './pages/auth-callback/auth-callback';
import { Login } from './pages/login/login';

export const routes: Routes = [
  { path: '', component: Login }, 
  { path: 'home', component: Home}, 
  { path: 'auth-callback', component: AuthCallback }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
