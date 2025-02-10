import { Component, OnInit } from '@angular/core';
import { StaffService } from '../../services/staff.service';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  constructor(private staffService: StaffService) {
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
      // Call staffService to get the tasks for the current staff member and handle response
    } else {
      console.error('Staff ID is not available'); // Log an error if the staff ID is not available
    }
  }

  // Method to update the status of a specific task
  updateTaskStatus(taskId: any, status: string) {
    // Call staffService to update the status of the specified task and handle response
  }
}
