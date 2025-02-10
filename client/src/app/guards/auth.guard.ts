import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  // Injecting the AuthService and Router into the guard
  constructor(private authService: AuthService, private router: Router) {}

  // Method to determine if a route can be activated
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    // Retrieve token from local storage
    
    // If a token is present, check if it is expired
    if (token) {
      
          // If token is not expired, allow access
          
            // If token is expired, redirect to login and deny access
           
        
          // In case of error, redirect to login and deny access
          
    } else {
      // If no token is present, redirect to login and deny access
     
    }
  }
}
