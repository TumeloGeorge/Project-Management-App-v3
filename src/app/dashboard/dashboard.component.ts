import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { DashboardService } from '../services/dashboard.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [SidebarComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  notifications: { message: string }[] = [];
  taskSummary = { total: 5, completed: 0, overdue: 0 };
  milestones: { title: string; progress: number }[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.loadNotifications();
    this.loadTaskSummary();
    this.loadMilestones();
  }

  loadNotifications(): void {
    this.dashboardService.getNotifications().subscribe(data => {
      this.notifications = data;
    });
  }

  loadTaskSummary(): void {
    this.dashboardService.getTaskSummary().subscribe(data => {
      this.taskSummary = data;
    });
  }

  loadMilestones(): void {
    this.dashboardService.getMilestones().subscribe(data => {
      this.milestones = data;
    });
  }
}
