import { Component, OnInit } from '@angular/core';
import { PlannerService } from '../../services/planner.service';
import { Event } from '../../models/event.model';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { StaffService } from '../../services/staff.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-planner-dashboard',
  templateUrl: './planner-dashboard.component.html',
  styleUrls: ['./planner-dashboard.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule]
})
export class PlannerDashboardComponent implements OnInit {
  // Flags to control the visibility of events and tasks
  showEvents: boolean = true;
  showTasks: boolean = false;

  // Arrays to hold events, tasks, and staff data
  events: Event[] = [];
  tasks: Task[] = [];
  staffs: User[] = [];

  // New event and task objects for form handling
  newEvent: Event = { title: '', date: '', location: '', description: '', status: '' };
  newTask: Task = { description: '', status: '', assignedStaff: '' };

  // Objects for selected event and task for editing purposes
  selectedEvent: Event | null = null;
  selectedTask: Task | null = null;

  // Injecting the necessary services and router
  constructor(private plannerService: PlannerService, private staffService: StaffService, private router: Router) { }

  // Lifecycle hook to fetch initial data when the component is initialized
  ngOnInit() {
    this.getEvents();
    this.getTasks();
    this.getStaff();
  }

  // Method to create a new event
  createEvent() {
    // Call plannerService to create the event and handle response
  }

  // Method to update an existing event
  updateEvent() {
    // Update selected event and call plannerService, handle response
  }

  // Method to fetch all events
  getEvents() {
    // Call plannerService to get the events and handle response
  }

  // Method to create a new task
  createTask() {
    // Call plannerService to create the task and handle response
  }

  // Method to fetch all tasks
  getTasks() {
    // Call plannerService to get the tasks and handle response
  }

  // Method to set up the selected event for editing
  editEvent(event: Event) {
    // Set selected event and toggle visibility
  }

  // Method to fetch all staff members
  getStaff() {
    // Call staffService to get the staff members and handle response
  }

  // Method to log out the user and navigate to the login page
  logout() {
    // Clear token and userId from local storage and navigate to login
  }

  // Method to navigate between managing events and tasks
  navigateTo(route: string) {
    // Toggle visibility of events and tasks based on the route
  }
}
