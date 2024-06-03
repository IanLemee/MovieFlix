import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent {
  @Input() movie: any;
  movieDetails: any;;

  constructor(
    private route: ActivatedRoute,
    public moviesService: MoviesService,
    private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const movieId = Number(params.get('id'));
      this.movieDetails = this.moviesService.getMovieById(movieId);
      console.log('Embed URL:', this.moviesService.getEmbedUrl(this.movieDetails.trailer));
    });
  }

  getEmbedUrl(url: string): string {
    const videoIdMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=))([^"&?\/\s]{11})/);
    const videoId = videoIdMatch ? videoIdMatch[1] : '';
    return `https://www.youtube.com/embed/${videoId}`;
  }

  addToWatchList(movie: any): void {
    this.moviesService.addToWatchList(movie);
  }
  
}

