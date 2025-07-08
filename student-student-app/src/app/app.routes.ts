import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home'; 
import { AuthCallback } from './pages/auth-callback/auth-callback';
import { Login } from './pages/login/login';
import { ViewStudents } from './pages/view-students/view-students';
import { AddStudent } from './pages/add-student/add-student';
import { UpdateStudent } from './pages/update-student/update-student';

export const routes: Routes = [
  { path: '', component: Login }, 
  { path: 'home', component: Home}, 
  { path: 'auth-callback', component: AuthCallback },
  { path: 'students', component: ViewStudents, pathMatch: 'full' },
  { path: 'students/add', component: AddStudent, pathMatch: 'full' },
  { path: 'students/update/:id', component: UpdateStudent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
