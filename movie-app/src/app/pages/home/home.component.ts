import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from '../../service/movie-api-service.service';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private service: MovieApiServiceService) {}

  bannerResult: any[] = [];
  currentIndex: number = 0;

  ngOnInit(): void {
    this.bannerData();
  }

  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult#');
      this.bannerResult = result.results; // Use result.results instead of result.result
    });
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.bannerResult.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.bannerResult.length) % this.bannerResult.length;
  }
}

