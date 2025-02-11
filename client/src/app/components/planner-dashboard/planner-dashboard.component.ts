
import { Component, OnInit } from '@angular/core';
import { PlannerService } from '../../services/planner.service';
import { Event } from '../../models/event.model';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
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
  constructor(
    private plannerService: PlannerService,
    private staffService: StaffService,
    private router: Router
  ) {}

// Lifecycle hook to fetch initial data when the component is initialized
ngOnInit() {
this.getEvents();
this.getTasks();
this.getStaff();
}

// Method to create a new event
createEvent() {
this.plannerService.createEvent(this.newEvent).subscribe(response => {
this.getEvents();
this.newEvent = { title: '', date: '', location: '', description: '', status: '' };
}, error => {
console.error('Error creating event:', error);
});
}

// Method to update an existing event
updateEvent() {
  if (this.selectedEvent && this.selectedEvent.id) {
    this.plannerService.updateEvent(this.selectedEvent, this.selectedEvent.id).subscribe(response => {
      this.getEvents();
      this.selectedEvent = null;
    }, error => {
      console.error('Error updating event:', error);
    });
  } else {
    console.error('Selected event ID is undefined or invalid');
  }
}


// // Method to update an existing event
// updateEvent() {
// if (this.selectedEvent) {
// this.plannerService.updateEvent(this.selectedEvent, this.selectedEvent.id).subscribe(response => {
// this.getEvents();
// this.selectedEvent = null;
// }, error => {
// console.error('Error updating event:', error);
// });
// }
// }

// Method to fetch all events
getEvents() {
this.plannerService.getEvents().subscribe(events => {
this.events = events;
}, error => {
console.error('Error fetching events:', error);
});
}

// Method to create a new task
createTask() {
this.plannerService.createTask(this.newTask).subscribe(response => {
this.getTasks();
this.newTask = { description: '', status: '', assignedStaff: '' };
}, error => {
console.error('Error creating task:', error);
});
}

// Method to fetch all tasks
getTasks() {
this.plannerService.getTasks().subscribe(tasks => {
this.tasks = tasks;
}, error => {
console.error('Error fetching tasks:', error);
});
}

// Method to set up the selected event for editing
editEvent(event: Event) {
this.selectedEvent = event;
this.showEvents = true;
this.showTasks = false;
}

// Method to fetch all staff members
getStaff() {
this.staffService.getStaff().subscribe(staffs => {
this.staffs = staffs;
}, error => {
console.error('Error fetching staff:', error);
});
}

// Method to log out the user and navigate to the login page
logout() {
localStorage.removeItem('token');
localStorage.removeItem('userId');
this.router.navigate(['/login']);
}

// Method to navigate between managing events and tasks
navigateTo(route: string) {
if (route === 'events') {
this.showEvents = true;
this.showTasks = false;
} else if (route === 'tasks') {
this.showEvents = false;
this.showTasks = true;
}
}
}