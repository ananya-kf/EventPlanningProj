import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
//import jwt_decode from 'jwt-decode';
import { environment } from '../../environments/environment';
import { User,AuthResponse,Credentials } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = `${environment.apiUrl}/api/user`;

  constructor(private http: HttpClient) {}

  register(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  login(credentials: Credentials): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/login`, credentials);
  }

  isTokenExpired(token: string): Observable<boolean> {
    try {
     // const decodedToken: any = jwt_decode(token);
     // const expirationDate = new Date(decodedToken.exp * 1000);
      const isExpired = false;// expirationDate < new Date();
      return of(isExpired);
    } catch (error) {
      return of(true); // Token is invalid or some error occurred
    }
  }
}
