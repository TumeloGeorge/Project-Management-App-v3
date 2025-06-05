import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskListComponent } from './task-list/task-list.component';

export const routes: Routes = [
    {path: 'dashboard', component: DashboardComponent },
    {path: "tasks", component: TaskListComponent },
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];
