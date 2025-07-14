import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/login/login').then(m => m.Login)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'login/callback',
    loadComponent: () => import('./pages/auth-callback/auth-callback').then(m => m.AuthCallback)
  },
  {
    path: 'students',
    loadComponent: () => import('./pages/view-students/view-students').then(m => m.ViewStudents)
  },
  {
    path: 'subjects',
    loadComponent: () => import('./pages/view-subjects/view-subjects').then(m => m.ViewSubjects)
  },
  {
    path: 'students/add',
    loadComponent: () => import('./pages/add-student/add-student').then(m => m.AddStudent)
  },
  {
    path: 'subjects/add',
    loadComponent: () => import('./pages/add-subject/add-subject').then(m => m.AddSubject)
  },
  {
    path: 'students/update/:id',
    loadComponent: () => import('./pages/update-student/update-student').then(m => m.UpdateStudent)
  },
  {
    path: 'subjects/update/:id',
    loadComponent: () => import('./pages/update-subject/update-subject').then(m => m.UpdateSubject)
  },
  {
    path: 'assign',
    loadComponent: () => import('./pages/view-subject-assign/view-subject-assign').then(m => m.ViewSubjectAssign)
  },
  {
    path: 'assign/students/:subjectId/:subjectName',
    loadComponent: () => import('./pages/assign-student/assign-student').then(m => m.AssignStudent)
  },
  {
    path: 'assigned/students/:subjectId/:subjectName',
    loadComponent: () => import('./pages/assigned-student/assigned-student').then(m => m.AssignedStudent)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
