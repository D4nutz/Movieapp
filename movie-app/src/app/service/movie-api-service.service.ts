import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }

  baseurl = 'https://api.themoviedb.org/3';
  apikey = '43be55b99822c5bb656eefac2d1ce077';

bannerApiData():Observable<any>{
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
}

//trendingmoviesapi

trendingMoviesApiData():Observable<any>{
  return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`);
}

getSearchMovie(data:any):Observable<any>{
  console.log(data, 'movie#')
  return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);
}

getMovieCast(movieId: number): Observable<any> {
  const url = `${this.baseurl}/movie/${movieId}/credits?api_key=${this.apikey}`;
  return this.http.get(url);
}

getMovieDetails(data:any): Observable<any>{
  return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`);

}

}

export class FavoriteService {
  private favorites: any[] = [];

  getFavorites(): any[] {
    return this.favorites;
  }

  setFavorites(favorites: any[]): void {
    this.favorites = favorites;
  }
}