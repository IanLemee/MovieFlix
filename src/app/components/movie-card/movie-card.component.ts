import { Component, OnInit} from '@angular/core';
import { MoviesService } from '../../service/movies.service';
import { WatchlistService } from 'src/app/service/watchlist.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  movies: any[] = [];
  showDescription: boolean = false;
  selectedMovie: any | null = null;
  isDropdownOpen: boolean = false;

  constructor(
    private watchListService: WatchlistService,
    private moviesService: MoviesService
    ) {}

  ngOnInit(): void {
    this.movies = this.moviesService.getMovies();
  }

  onMouseOver(movie: any) {
    this.selectedMovie = movie;
    this.showDescription = true;
  }

  onMouseLeave() {
    this.selectedMovie = null;
    this.showDescription = false;
  }

  addToWatchList(movie: any): void {
    this.moviesService.addToWatchList(movie);
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown(): void {
    this.isDropdownOpen = false;
  }

  sortByTitle(): void {
    this.movies.sort((a, b) => a.title.localeCompare(b.title));
    this.closeDropdown();
  }

  sortByDate(): void {
    this.movies.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    this.closeDropdown();
  }

  isOnWatchlist(movie: any): boolean {
    return this.watchListService.getWatchlist().some((m) => m.id === movie.id);
  }
}
