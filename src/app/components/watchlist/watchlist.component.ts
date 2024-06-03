import { Component } from '@angular/core';
import { WatchlistService } from 'src/app/service/watchlist.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent {

  constructor(private watchlistService: WatchlistService) {}

  getWatchlist(): any[] {
    return this.watchlistService.getWatchlist();
  }

  isWatchlistVisible(): boolean {
    return this.watchlistService.isWatchlistVisible();
  }

  toggleWatchlistVisibility(): void {
    this.watchlistService.toggleWatchlistVisibility();
  }

  markAsWatched(movie: any): void {
      // Call the removeFromWatchlist function to remove the movie from the watchlist
    this.watchlistService.removeFromWatchlist(movie);
  }
}
