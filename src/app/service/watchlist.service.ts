import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  private watchlist: any[] = [];
  private watchlistVisible: boolean = false;

  initializeWatchlist(): void {
    const storedWatchlist = localStorage.getItem('watchlist');
    if (storedWatchlist) {
      this.watchlist = JSON.parse(storedWatchlist);
    }
  }

  constructor() {
    this.initializeWatchlist();
  }

  private updateLocalStorage(): void {
    localStorage.setItem('watchlist', JSON.stringify(this.watchlist));
  }

  addToWatchlist(movies: any[]): void {
    this.watchlist = movies;
    this.updateLocalStorage();
  }

  removeFromWatchlist(movie: any): void {
    const index = this.watchlist.findIndex((m) => m.id === movie.id);
    if (index !== -1) {
      this.watchlist.splice(index, 1);
      this.updateLocalStorage();
    }
  }

  getWatchlist(): any[] {
    return this.watchlist;
  }

  toggleWatchlistVisibility(): void {
    this.watchlistVisible = !this.watchlistVisible;
  }

  isWatchlistVisible(): boolean {
    return this.watchlistVisible;
  }

  showWatchlist(): void {
    this.watchlistVisible = true;
  }
}

