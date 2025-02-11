import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User,Credentials } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule,HttpClientModule]
})
export class RegisterComponent {
  user: User = {
    username: '',
    email: '',
    password: '',
    role: 'PLANNER' // Set default role
  };

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.user).subscribe(
      response => {
        this.router.navigate(['/login']); // Navigate to login after successful registration
      },
      error => {
        console.error('Registration error:', error);
      }
    );
  }
}
