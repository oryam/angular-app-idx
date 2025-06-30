import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-google-reviews',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule],
  templateUrl: './google-reviews.html',
  styleUrl: './google-reviews.scss',
})
export class GoogleReviews {

  reviews = [
    {
      author: 'Alice Smith',
      text: 'Great service and friendly staff! Highly recommend.',
      reply: {
        author: 'Business Owner',
        text: 'Thank you for your kind words, Alice! We are happy to hear you had a great experience.'
      }
    },
    {
      author: 'Bob Johnson',
      text: 'The product was exactly what I needed. Fast shipping!',
      reply: null
    },
    {
      author: 'Charlie Brown',
      text: 'A bit slow on the response time, but overall satisfied.',
      reply: {
        author: 'Business Owner',
        text: 'We apologize for the delay, Charlie. We are working to improve our response times. Thank you for your feedback!'
      }
    },
    {
      author: 'Diana Prince',
      text: 'Excellent quality and value for money.',
      reply: null
    },
    {
      author: 'Ethan Hunt',
      text: 'Had an issue with my order, but it was resolved quickly and efficiently.',
      reply: {
        author: 'Business Owner',
        text: 'We are glad we could resolve the issue for you, Ethan. Thank you for your understanding.'
      }
    }
  ];

}

