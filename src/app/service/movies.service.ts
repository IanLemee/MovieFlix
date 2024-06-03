import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { WatchlistService } from './watchlist.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  
  private movies = [
    {
      id: 1,
      title: 'Avengers: Age of Ultron', 
      date: ' 1 May 2015',
      description: `When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program
      called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous     Ultron
      from enacting his terrible plan.`,
      trailer: 'https://www.youtube.com/watch?v=tmeOjFno6Do',
      rating: 7.3,
      duration: '2h 21min',
      genre: 'Action, Adventure, Sci-Fi',
      image: './assets/images/resources/Avengers.png'
    },
    {
      id: 2,
      title: 'Tenet',
      date: ' 3 September 2020',
      description: `Armed with only one word, Tenet, and fighting for the survival of the entire world, a
      Protagonist journeys through a twilight world of international espionage on a mission that will unfold in
      something beyond real time.`,
      trailer: 'https://www.youtube.com/watch?v=LdOM0x0XDMo',
      rating: 7.8,
      duration: '2h 30 min',
      genre: 'Action, Sci-Fi',
      image: './assets/images/resources/Tenet.png'
    },
    {
      id: 3,
      title: 'Spider-Man: Into the Spider-Verse',
      date: '14 December 2018',
      description: `Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spiderpowered individuals from other dimensions to stop a threat for all realities.`,
      trailer: 'https://www.youtube.com/watch?v=tg52up16eq0',
      rating: 8.4,
      duration: '1h 57min',
      genre: 'Action, Animation, Adventure',
      image: './assets/images/resources/Spider-Man.png'
    },
    {
      id: 4,
      title: 'Knives Out',
      date: '27 November 2019',
      description: `A detective investigates the death of a patriarch of an eccentric, combative family.`,
      trailer: 'https://www.youtube.com/watch?v=qGqiHJTsRkQ ',
      rating: 7.9,
      duration: '2h 10min',
      genre: 'Comedy, Crime, Drama',
      image: './assets/images/resources/Knives-Out.png'
    },
    {
      id: 5,
      title: 'Guardians of the Galaxy',
      date: '1 August 2014',
      description: `A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to
      purge the universe.`,
      trailer: 'https://www.youtube.com/watch?v=d96cjJhvlMA',
      rating: 8.0,
      duration: '2h 1min',
      genre: 'Action, Adventure, Comedy',
      image: './assets/images/resources/Guardians-of-The-Galaxy.png'
    },
  ]

  private watchlist: any[] = []; // Adicione uma propriedade para armazenar a watchlist

  constructor(private watchlistService: WatchlistService) {
    const storedWatchlist = localStorage.getItem('watchlist');

    if (storedWatchlist) {
      this.watchlist = JSON.parse(storedWatchlist);
    }
  }

  addToWatchList(movie: any): void {
    // Verificar se o filme já está na watchlist
    const isDuplicate = this.watchlist.some((m) => m.id === movie.id);
    
    if (!isDuplicate) {
      // Adicione o filme à watchlist apenas se não for uma duplicata
      this.watchlist.push({ id: movie.id, title: movie.title, image: movie.image });
      
      // Atualize a watchlist no localStorage apenas se for um novo filme
      this.updateLocalStorage();
    }
  
    // Adicione a lista completa de filmes ao MoviesService watchlist
    this.watchlistService.addToWatchlist(this.watchlist);
  }

  private updateLocalStorage(): void {
    localStorage.setItem('watchlist', JSON.stringify(this.watchlist));
  }

  getWatchList(): any[] {
    // Obtenha a watchlist usando o WatchlistService
    return this.watchlistService.getWatchlist();
  }

  getEmbedUrl(videoUrl: string): string {
    const videoId = this.extractVideoId(videoUrl);
    return `https://www.youtube.com/embed/${videoId}`;
  }

  private extractVideoId(url: string): string {
    const videoIdMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=))([^"&?\/\s]{11})/);
    return videoIdMatch ? videoIdMatch[1] : '';
  }
  
  getMovies(): any[] {
    return this.movies;
  }

  getMovieById(id: number) {
    return this.movies.find(movie => movie.id === id);
  }

}
