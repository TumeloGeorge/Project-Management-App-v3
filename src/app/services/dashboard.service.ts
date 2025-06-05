import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }
  getNotifications(): Observable<{message: string}[]> {
    return of([
      { message: 'Task "Prepare Report" is overdue!' },
      { message: 'Reminder: Meeting at 3 PM today.' },
    ]);
  }

  getTaskSummary(): Observable<{ total: number; completed: number; overdue: number }> {
    return of({
      total: 10,
      completed: 7,
      overdue: 2,
    });
  }

  getMilestones(): Observable<{ title: string; progress: number }[]> {
    return of([
      { title: 'Project A Milestone 1', progress: 50 },
      { title: 'Project B Milestone 2', progress: 80 },
    ]);
  }
}
