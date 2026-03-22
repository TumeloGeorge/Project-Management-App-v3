import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Firestore, collection, addDoc, where, collectionData, query } from '@angular/fire/firestore';
import { getAuth } from 'firebase/auth';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // for *ngFor binding



@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [SidebarComponent, FormsModule, CommonModule], // Always update to ensure imports are poropergated to the HTML side
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

  constructor(private firestore: Firestore) {}
 // Submit to the fire store DB
  async onSubmit() {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      alert('You must be logged in to submit a task.');
      return;
    }

    try {
      const tasksCollection = collection(this.firestore, `users/${user.uid}/tasks`);
      await addDoc(tasksCollection, {
        ...this.task,
        createdAt: new Date(),
        projectId: this.task.project
      });

      alert('✅ Task added successfully!');
      this.resetForm();

    } catch (error) {
      console.error('❌ Error adding task:', error);
      alert('Something went wrong while saving the task.');
    }
  }

  resetForm() {
    this.task = {
      project: '',
      title: '',
      description: '',
      dueDate: '',
      priority: '',
      assignedPerson: ''
    };
  }
  tasks: any[] = [];
  progressPercent: number = 0;
  selectedProjectId: string = '';

  /**
   * Load tasks and calculate progress for a specific project.
   * @param projectId The ID of the project to load tasks for.
   */  
    async loadProgress(projectId: string) {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) return;

    const tasksRef = collection(this.firestore, `users/${user.uid}/tasks`);
    const q = query(tasksRef, where('projectId', '==', projectId));
    
    collectionData(q, { idField: 'id' }).subscribe(data => {
      this.tasks = data;
      const total = data.length;
      const completed = data.filter(task => task['isCompleted']).length;
      this.progressPercent = total === 0 ? 0 : Math.round((completed / total) * 100);
    });
  }
}
