import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home'; 
import { AuthCallback } from './pages/auth-callback/auth-callback';
import { Login } from './pages/login/login';
import { ViewStudents } from './pages/view-students/view-students';
import { AddStudent } from './pages/add-student/add-student';
import { UpdateStudent } from './pages/update-student/update-student';
import { ViewSubjects } from './pages/view-subjects/view-subjects';
import { AddSubject } from './pages/add-subject/add-subject';
import { UpdateSubject } from './pages/update-subject/update-subject';
import { ViewSubjectAssign } from './pages/view-subject-assign/view-subject-assign';
import { AssignStudent } from './pages/assign-student/assign-student';
import { AssignedStudent } from './pages/assigned-student/assigned-student';

export const routes: Routes = [
  { path: '', component: Login }, 
  { path: 'home', component: Home}, 
  { path: 'login/callback', component: AuthCallback },
  { path: 'students', component: ViewStudents, pathMatch: 'full' },
  { path: 'subjects', component: ViewSubjects, pathMatch: 'full' },
  { path: 'students/add', component: AddStudent, pathMatch: 'full' },
  { path: 'subjects/add', component: AddSubject, pathMatch: 'full' },
  { path: 'students/update/:id', component: UpdateStudent, pathMatch: 'full' },
  { path: 'subjects/update/:id', component: UpdateSubject, pathMatch: 'full' },
  { path: 'assign', component: ViewSubjectAssign, pathMatch: 'full' },
  { path: 'assign/students/:subjectId/:subjectName', component: AssignStudent, pathMatch: 'full' },
  { path: 'assigned/students/:subjectId/:subjectName', component: AssignedStudent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
