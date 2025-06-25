import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FirebaseAuthComponent } from './firebase-auth/firebase-auth.component';

export const routes: Routes = [
    {path: 'login', component: FirebaseAuthComponent },
    {path: 'dashboard', component: DashboardComponent },
    {path: 'app-task-list', component: TaskListComponent },
    {path: '', redirectTo: 'login', pathMatch: 'full'}
];
