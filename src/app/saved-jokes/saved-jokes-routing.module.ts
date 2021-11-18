import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavedJokesPage } from './saved-jokes.page';

const routes: Routes = [
  {
    path: '',
    component: SavedJokesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavedJokesPageRoutingModule {}
