import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from '../../service/movie-api-service.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FavoriteService } from '../../service/movie-api-service.service';

interface MovieCast {
  cast: any[]; 
  crew: any[]; 
}

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css', './home.component.min.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: MovieApiServiceService, private router: Router, private favoriteService: FavoriteService) {
    this.logFavorites();
  }


  favorites: any[] = [];
  bannerResult: any = [];
  trendingMoviesResult: any = [];
  currentIndex: number = 0;

  ngOnInit(): void {
    this.bannerData();
    this.trendingdata(); 
    this.listfav();
  }

  logFavorites() {
    const storedFavorites = localStorage.getItem('favorites');
    this.favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
  }

  listfav(){
      const storedFavorites = localStorage.getItem('favorites');
      this.favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
  }

  addToFavorites(movie: any) {
    const existingIndex = this.favorites.findIndex(fav => fav.id === movie.id);

    if (existingIndex === -1) {
      this.favorites.push(movie);
    } else {
      this.favorites.splice(existingIndex, 1);
    }

    // Update localStorage with the updated favorites
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  isFavorite(movieId: number): boolean {
    return this.favorites.some(fav => fav.id === movieId);
  }
  
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult#');
      this.bannerResult = result.results; // Use result.results instead of result.result
    });
  }

  navigateToMovie(movieId: number) {
    this.router.navigate(['../movie', movieId]);
  }
  
  clearSearch() {
    // Reset the search results and clear the search form
    this.searchResult = null;
    this.searchForm.reset();
  }

  trendingdata() {
    this.service.trendingMoviesApiData().subscribe((result) => {
      console.log(result, 'trendingresult#');
      this.trendingMoviesResult = result.results; // Use result.results instead of result.result
    });
  }

  searchResult:any;
  castResult:any;
  searchForm = new FormGroup({
      'movieName':new FormControl(null)
  });

  submitForm() {
    console.log(this.searchForm.value, 'searchform#');
    this.service.getSearchMovie(this.searchForm.value).subscribe((result) => {
      console.log(result, 'searchmovie##');
      this.searchResult = result.results;

    });
  } 

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.bannerResult.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.bannerResult.length) % this.bannerResult.length;
  }

}

