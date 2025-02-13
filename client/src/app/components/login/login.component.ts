
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, FormBuilder,ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { User, Credentials, AuthResponse } from '../../models/user.model';

@Component({
 selector: 'app-login',
 templateUrl: './login.component.html', 
 styleUrls: ['./login.component.css'],
 standalone: true,
 imports: [CommonModule, FormsModule,ReactiveFormsModule, HttpClientModule]
})
export class LoginComponent {
 loginForm: FormGroup;
 errorMessage: string = '';
 credentials: Credentials = { username: '', password: '' };



 constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
  this.loginForm = this.fb.group({
   username: ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9]{4,12}$') ]],
   password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{8,}$')]]
  });
}


//  lowercaseOnly(control: AbstractControl): ValidationErrors | null {
//   const lowercaseRegex = /^[A-Za-z\d{3,}]+$/;
//   if (!lowercaseRegex.test(control.value)) {
//    return { lowercaseOnly: true };
//   }
//   return null;
//  }
login() {
  this.authService.login(this.loginForm.value).subscribe(
   (response: AuthResponse) => {
    localStorage.setItem('token', response.token);
    localStorage.setItem('userId', response.userId);

    console.log(response.userId);

    // Navigate based on the user's role
    switch (response.role) {
     case 'PLANNER':
      this.router.navigate(['planner-dashboard']);
      break;
     case 'CLIENT':
      this.router.navigate(['/client-dashboard']);
      break;
     case 'STAFF':
      this.router.navigate(['/staff-dashboard']);
      break;
     default:
      console.error('Unknown user role:', response.role);
      break;
    }
   },
   error => {
    console.error('Login error:', error);
   }
  );
 }


 goToRegister() {
  this.router.navigate(['/register']);
 }


 get username() {
  return this.loginForm.get('username');
 }


 get password() {
  return this.loginForm.get('password');
 }
 
}

