import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Info } from './info/info';
import { GoogleReviews } from './google-reviews/google-reviews';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'info', component: Info },
    { path: 'reviews', component: GoogleReviews },
];
