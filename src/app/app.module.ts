import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './components/header/header.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { MoviesService } from './service/movies.service';
import { SafePipe } from './safe.pipe';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { FooterComponent } from './components/footer/footer.component';
// import { YoutubePlayerModule } from 'ngx-youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    HeaderComponent,
    MovieCardComponent,
    MoviePageComponent,
    SafePipe,
    WatchlistComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // YoutubePlayerModul
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
