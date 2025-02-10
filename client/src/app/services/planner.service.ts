import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/event.model';
import { Task } from '../models/task.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlannerService {
  private baseUrl = `${environment.apiUrl}/api/planner`;

  constructor(private http: HttpClient) {}

  createEvent(event: Event): Observable<Event> {
  //  create event service calla
  }

  updateEvent(event: Event, eventId: string): Observable<Event> {
    // update event service call
  }

  deleteEvent(eventId: string): Observable<void> {
    // delete event service call 
  }

  getEvents(): Observable<Event[]> {
  //  get all events service call 
  }

  createTask(task: Task): Observable<Task> {
    // create new task service call 
  }

  getTasks(): Observable<Task[]> {
    // get tasks service call 
  }
  getEventsById(eventId:string):Observable<Event>{
// get event by id service call 

  }

  assignTask(taskId: string, staffId: string): Observable<any> {
    // assign task to staff
  }
}
