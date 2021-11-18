import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RandomJokesPage } from './random-jokes.page';

const routes: Routes = [
  {
    path: '',
    component: RandomJokesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RandomJokesPageRoutingModule {}
