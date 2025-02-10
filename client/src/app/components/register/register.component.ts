import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule]
})
export class RegisterComponent {
  // Object to hold user registration data
  user: User = {
    username: '',
    email: '',
    password: '',
    role: 'PLANNER' // Set default role
  };

  // Injecting the AuthService and Router into the component
  constructor(private authService: AuthService, private router: Router) {}

  // Method to handle user registration
  register() {
    // Call authService to register the user and handle the response
    // On successful registration, navigate to the login page
    // Handle any errors that occur during registration
  }
}
