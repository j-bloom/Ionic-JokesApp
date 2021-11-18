import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'random-jokes',
    loadChildren: () => import('./random-jokes/random-jokes.module').then( m => m.RandomJokesPageModule)
  },
  {
    path: 'programming-joke',
    loadChildren: () => import('./programming-joke/programming-joke.module').then( m => m.ProgrammingJokePageModule)
  },
  {
    path: 'pun-jokes',
    loadChildren: () => import('./pun-jokes/pun-jokes.module').then( m => m.PunJokesPageModule)
  },
  {
    path: 'saved-jokes',
    loadChildren: () => import('./saved-jokes/saved-jokes.module').then( m => m.SavedJokesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
