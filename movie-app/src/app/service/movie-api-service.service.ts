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
}
