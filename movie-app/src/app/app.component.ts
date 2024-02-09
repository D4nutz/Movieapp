import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MovieApiServiceService } from './service/movie-api-service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component'; 
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgOptimizedImage, IMAGE_CONFIG } from '@angular/common';
import { FavoriteService } from './service/movie-api-service.service';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgOptimizedImage,
  ],
  providers: [
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true, 
        disableImageLazyLoadWarning: true
      }
    },
    MovieApiServiceService,
    FavoriteService,
  ],
})
export class YourModule { }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, YourModule],
  providers: [MovieApiServiceService, FavoriteService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component.min.css']
})
export class AppComponent {
  title = 'movie-app';

  constructor(private favoriteService: FavoriteService) { } // Add this constructor

  logFavorites() {
    const storedFavorites = localStorage.getItem('favorites');
    const favoritesArray = storedFavorites ? JSON.parse(storedFavorites) : [];
    console.log('Favorites:', favoritesArray);
  }
  
}
