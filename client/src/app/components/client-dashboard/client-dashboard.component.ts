import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Event } from '../../models/event.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ClientDashboardComponent implements OnInit {
[x: string]: any;
  events: Event[] = [];
  feedbackoptions: string[] = ['Very Bad', 'Bad', 'Satisfactory', 'Good', 'Best'];  
  ratingOptions: number[] = [1, 2, 3, 4, 5];

  constructor(private clientService: ClientService, private router:Router) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.clientService.getEvents().subscribe(
      response => {
        this.events = response;
      },
      error => {
        console.error('Error fetching events:', error);
      }
    );
  }

  provideFeedback(eventId: any, feedback: string) {
    this.clientService.provideFeedback(eventId, feedback).subscribe(
      response => {
        console.log('Feedback submitted successfully:', response);
      },
      error => {
        console.error('Error submitting feedback:', error);
      }
    );
  }


// openFeedbackDialog() {
//     const dialogRef = this.dialog.open(FeedbackDialogComponent);

//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//     });
//   }


  logout() {
    localStorage.setItem('token', '');
    localStorage.setItem('userId', '');
    this.router.navigate(['/login']);
  }
}
