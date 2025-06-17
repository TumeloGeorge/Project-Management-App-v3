import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-task-list',
  imports: [SidebarComponent],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  title = 'Task List';
  projects = [
    { id: 1, name: 'Project A' },
    { id: 2, name: 'Project B' },
    { id: 3, name: 'Project C' }
  ];

  task = {
    project: '',
    title: '',
    description: '',
    dueDate: '',
    priority: '',
    assignedPerson: ''
  };

  onSubmit() {
    console.log('Task submitted:', this.task);
    // Add your form submission logic here
  }
}
