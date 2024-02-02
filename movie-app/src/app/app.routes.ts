import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'movie/:id',component:MovieDetailsComponent}
];

