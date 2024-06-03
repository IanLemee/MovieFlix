import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { HomeComponent } from './pages/home/home.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';

const routes: Routes = [
  // {
  //   path: 'watchlist',
  //   component: WatchlistComponent
  // },
  {
    path: ' ',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'movie/:id', 
    component: MoviePageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
