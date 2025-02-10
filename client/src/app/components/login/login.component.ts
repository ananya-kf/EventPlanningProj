import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { User,Credentials,AuthResponse } from '../../models/user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule,HttpClientModule]
})
export class LoginComponent {
  credentials: Credentials = { username: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  login() {
      // based on the role login in to the system using auth services
      
  }
  goToRegister() {
    // on click of register button navigate to register route
  }
}
