import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from '../../service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})

export class MovieDetailsComponent implements OnInit {
  constructor(private service: MovieApiServiceService, private router: ActivatedRoute) { }
  getMovieDetailResult:any;
  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId, 'getparamid#');

    this.getMovie(getParamId);
  }

  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe((result)=> {
      console.log(result, 'getmoviedetails#');
      this.getMovieDetailResult = result;
    });
  }
}
