import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FirebaseAuthComponent } from './firebase-auth/firebase-auth.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { ReportsComponent } from "./reports/reports.component";

export const routes: Routes = [

    {path: 'dashboard', component: DashboardComponent },
    {path: 'app-task-list', component: TaskListComponent },
    {path: 'app-schedule', component: ScheduleComponent },
    {path: 'app-file-manager', component: FileManagerComponent },
    {path: 'app-reports', component: ReportsComponent  },
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];
