import { Component, OnInit } from '@angular/core';
import { StaffService } from '../../services/staff.service';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class StaffDashboardComponent implements OnInit {
  // Array to hold the tasks assigned to the staff
  tasks: Task[] = [];
  
  // Variable to store the staff ID
  staffId: string | undefined;

  // Injecting the StaffService into the component
  constructor(private staffService: StaffService,private router:Router) {
    // Retrieve the staff ID from local storage if available
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId !== null) {
      this.staffId = storedUserId;
    }
  }

  // Lifecycle hook that is called after the component is initialized
  ngOnInit() {
    this.getTasks(); // Fetch tasks when the component is initialized
  }

  // Method to fetch tasks assigned to the staff
  getTasks() {
    if (this.staffId) {
      this.staffService.getTasks(this.staffId).subscribe(
        (task: Task[]) => {
            this.tasks =task;
            this.tasks = this.tasks.sort((a,b)=> b.status.localeCompare(a.status));
        },
        (error) => {
          console.error('Error fetching tasks', error);
        }
        );

      // Call staffService to get the tasks for the current staff member and handle response
    } else {
      console.error('Staff ID is not available'); // Log an error if the staff ID is not available
    }
  }

    logout() {
  localStorage.setItem('token', '');
  localStorage.setItem('userId', '');
  this.router.navigate(['/login']);
 }


  // Method to update the status of a specific task
  updateTaskStatus(taskId: any, status: string) {
    // Call staffService to update the status of the specified task and handle response
    this.staffService.updateTaskStatus(taskId, status).subscribe(
      (response) => {
        console.log('Task status updates', response);
        this.getTasks();
      },
      (error) => {
        console.error('Error updating task status', error);
      }
    );
    
  }
}
